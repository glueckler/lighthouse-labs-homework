"use strict";
var ObjectId = require('mongodb').ObjectID;

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  const tweetsCol = db.collection('tweets');
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {

        tweetsCol.insertOne(newTweet, (err) => {

          callback(null, true);

        })
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at

        tweetsCol.find().toArray((err, tweets) => {
          callback(null, tweets.sort(sortNewestFirst));
        });

      });
    },

    likeTweet: function( tweetId, callback ) {
      const searchId = { _id : new ObjectId(tweetId) }
      const action = { $inc: { 'Likes': 1 } }

      tweetsCol.updateOne(searchId, action, (err) => {
        callback(err, true);
      })
    }

  }
}
