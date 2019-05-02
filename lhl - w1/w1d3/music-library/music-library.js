var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists:
  function printPlaylists(){
    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks
    var list = '';
    for(let key in this.playlists){
      var subList = key + ': ' + this.playlists[key].name + ' - ' + this.playlists[key].tracks.length + ' tracks';
      list += '\n' + subList;
    }
    return list.slice(1);
  },

  printTracks:
  function printTracks(){
    // prints a list of all tracks, in the form:
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)
    // t03: Four Thirty-Three by John Cage (Woodstock 1952)
    var trackList = '';
    for(let key in this.tracks){
      subList = key + ': ' + this.tracks[key].name + ' by ' + this.tracks[key].artist + ' ' + '(' + this.tracks[key].album + ')';
      trackList += '\n' + subList;
    }
    return trackList.slice(1);
  },

  printPlaylist:
  function printPlaylist(playlistId) {

    // prints a list of tracks for a given playlist, in the form:
    // p01: Coding Music - 2 tracks
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)


    let playlist = this.playlists[playlistId];

    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);

    each(playlist.tracks, printTrack);

  },

  printTrack:
  function printTrack(trackId) {
    let track = this.tracks[trackId]
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  },

  each:
  function each(ids, callback) {
      ids.forEach(id => callback(id));
  },

  addTrackToPlaylist:
  function addTrackToPlaylist(trackId, playlistId) {
    // adds an existing track to an existing playlist
    var track = this.tracks[trackId];
    var playlist = this.playlists[playlistId];
    playlist.tracks.push(track.id)
  },

  uid:
  function() {
    // generates a unique id
    // (use this for addTrack and addPlaylist)
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack:
  function (name, artist, album) {
    // adds a track to the this
    var tracks = this.tracks;
    var id = this.uid();
    var addObject = {
      id : id,
      name : name,
      artist : artist,
      album : album
    }
    tracks[id] = addObject;
  },

  addPlaylist:
  function (name) {
    // adds a playlist to the this
    var playlist = this.playlists;
    var id = this.uid();
    var addObject = {
      id: id,
      name: name,
      tracks: []
    }
    playlist[id] = addObject;
  },

  printSearchResults:
  function(query) {
    // STRETCH: //nah going to bedddddddd
    // given a query string string, prints a list of tracks
    // where the name, artist or album contains the query string (case insensitive)
    // tip: use "string".search("tri")
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
    var short = this.tracks;
    var searchMe = function() {
      var obj = {};
      for(key in short) {
        var str = '';
        str = str + ` ${short[key].name} ${short[key].album} ${short[key].artist}`;
        obj[key] = str;
      }
      return obj;
    }()

    var results = function(searchObj) {
      var str = '';
      for (key in searchObj) {
        if (searchObj[key].search(new RegExp(query, "i")) > -1) {
          str+= `${short[key].name} ` }
      }
      return str;
    }(searchMe)

    console.log(results);
    //return ":)";
    //access the objects tracks name, album, artist values

    //add data if it matches the query
    //prints list of tracks that match

  }

}


//test code
// console.dir(library, { depth: null });
// console.log(`\n${Array(55).join('-')}\n`)

// library.addPlaylist('dean tunes');
// library.addTrack('track name', 'chili win', 'self titled');
// library.printTrack('t01');
// //sorry for not fully testing it
// //good luck your your new music library!

// console.dir(library, { depth: null });

//test the query search
library.printSearchResults('wOodsTock');
library.printSearchResults('monkey');










