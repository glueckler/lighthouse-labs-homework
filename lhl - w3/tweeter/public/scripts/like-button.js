$(function () {
  console.log('like-button-active')

  // add event handler to like button

  $('#tweets').on('click', '.tweet__like',function () {
    const tweetLikesDisplay = $(this).closest('.tweet__footer').find('[data-likes-count]')
    let tweetLikesCount = tweetLikesDisplay.attr('data-likes-count')
    tweetLikesCount++
    // tweetLikesCount = '' + tweetLikesCount
    tweetLikesDisplay.attr('data-likes-count', tweetLikesCount)
    const mongoId = {
      mongoId: tweetLikesDisplay.data('mongo-id')
    }
    $.ajax({
      url: '/tweets/like',
      method: 'put',
      data: mongoId
    }).done(function(){
      console.log('ajax done');
    });
  })

  // reference current like amount to a variable

  // when button is clicked, add 1 like to like amount

  // find data-tweet-id from specific tweet

  // update the dom to represent new likes amount

  // ajax put request to update the tweet likes property
})
