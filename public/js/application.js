$(document).ready(function() {

  var p1Name = $('#player1_strip').attr('data-player-name');
  var p2Name = $('#player2_strip').attr('data-second-player-name');

  var items = $('.spot');
  var items2 = $('.spot2');

  var restart = function() {

    items.first().addClass('active');
    items2.first().addClass('active');
  }; // end function



  restart();

  // console.log(items);
  // var play = function() {
  $(window).keyup(function(e) {
      var old = items.filter('.active');
      var current;

      var old2 = items2.filter('.active');
      var current2;

      if (e.keyCode === 81) {
          current = old.next();
          old.removeClass('active');
          current.addClass('active');

        if ( items.last().hasClass( "active" ) ) {
          window.alert(p1Name + " is triumphant");
          $.post('/log_winner', {p1: p1Name, p2: p2Name, winner: p1Name})
            .done(function( gameId ) {
              console.log(gameId)
              window.location.href="/results?game_id=" + gameId;
          });
        }; // end inner if
      };// end outer if




      if (e.keyCode === 80) {
          current2 = old2.next();
          old2.removeClass('active');
          current2.addClass('active');

        if ( items2.last().hasClass( "active" ) ) {
          window.alert(p2Name + " is triumphant");
          $.post('/log_winner', {p1: p1Name, p2: p2Name, winner: p2Name}).done(function(){
            window.location.href="/results";
          });
        }; // end inner
      }; // end outer
  }); //end listener

  // }; //end function
// restart();
// play();
}); //end document
