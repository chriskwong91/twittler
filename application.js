$(document).ready(function(){
  
  var visitor = "chriswong";
  var index = streams.home.length - 1;
  var className;

  while(index >= 0){
    var tweet = streams.home[index];
    var d = tweet.created_at;

    className = "tweet" + index.toString();
    var cloneTweet = $('#tweet').clone().removeAttr('id').attr('id', 'twet').addClass(className).data('username', tweet.user);
    $('#tweets').append(cloneTweet);
    $("." + className + " .user").text('@' + tweet.user + ":");
    $("." + className + " .message").text(tweet.message);
    $("." + className + " .time").text("posted at " + d.toLocaleTimeString());
    index -= 1;
  }

  // Sets up the user tweet popups
  $.each(streams.users, function(key, value) {
    var cloneModal = $('#modal').clone().addClass(key + "modal").data('username', key);
    $('#modals').append(cloneModal);
    var index = streams.users[key].length - 1;
    while(index >= 0) {
      var tweet = streams.users[key][index].message;
      var time = streams.users[key][index].created_at.toLocaleTimeString();
       $("." + key +"modal").find('.modal-header-heading').text("More Tweets from @" + key + ":");  
      $("." + key + "modal").find('.modal-body').append("<p>" + tweet +  " (" + time + ")</p><br>");
      index -= 1;
    }
  });

// Displays the tweets of the username that was clicked on
  $('.user').on('click', function() {
    var username = $(this).closest('#twet').data('username');
    $("." + username +"modal").css({'display': 'block'});
  });
  
  //closes the modal box
  $('.close').on('click', function() {
    var username = $(this).closest('#modal').data('username');
    $("." + username + "modal").css({'display': 'none'});
  });

});