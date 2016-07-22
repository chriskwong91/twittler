$(document).ready(function(){
  var $body = $('.twee');
  $body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    //var $tweet = $('<div></div>');
    //$tweet.text('@' + tweet.user + ': ' + tweet.message);
    var user = "<h4 class='user'>@" + tweet.user + ":</h4>" 
    var message = "<p class='message'>" + tweet.message + "</p>"
    var $tweet = (user + message);
    //$tweet.appendTo($body);
    $('#tweets').append('<li>' + $tweet + '</li>')
    index -= 1;
  }

});