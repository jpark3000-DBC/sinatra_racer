$(document).ready(function() {
  function Player(name){
    this.name = name;
    this.winningness = false;
  };


  function Track(track) {
    this.track = track;
  };

  Track.prototype.reset = function() {
    this.track.first().addClass('active');
  };

  Track.prototype.move = function(){
    var current = this.track.filter('.active');
    var next;
    next = current.next();
    current.removeClass('active');
    next.addClass('active');
  };

  Track.prototype.finished = function(){
    return this.track.last().hasClass("active")
  };



  function Game(name1, name2) {
    this.track1 = new Track($('.spot'));
    this.track2 = new Track($('.spot2'));
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
  };


  Game.prototype.onKeyUp = function(keyValue) {
    if (keyValue == 81) {
      this.track1.move();
    } else if (keyValue == 80) {
      this.track2.move();
    };
  };

  Game.prototype.reset = function() {
    this.track1.reset();
    this.track2.reset();
  };


  Game.prototype.winner = function() {
    if (this.track1.finished()) {
      this.player1.winningness = true;
      alert(this.player1.name);
    } else if (this.track2.finished()) {
      this.player2.winningness = true;
      alert(this.player2.name);
    };
  };

  var getPlayerNames = function() {
    $("#player_names").submit(function(event) {
      event.preventDefault();
      $.post("/create_players", $("#player_names").serialize(), function(data) {
        console.log(data);
      });
    });
  };


  getPlayerNames();

  // var game = new Game('bob', 'rob');
  // game.create_players();
  // game.reset()


  // $(window).keyup(function(e) {
  //   game.onKeyUp(event.which);
  //   game.winner();
  // });






});



