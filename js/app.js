$(function(){

  var $player = $('.player');
  var $tiles = $('li');

  var gridLength = 33;

  function movePlayer(keyboardEvent) {
    var classToAdd;

    //console.log(keyboardEvent.keyCode);
    console.log('movePlayer: this:', this);
    var index = $player.index();
    switch(keyboardEvent.keyCode) {
    case 38:
      index -= gridLength;
      classToAdd = "pacmanUp";
      // $tiles.eq(index).addClass("pacmanUp");
      break;
    case 40:
      index += gridLength;
      classToAdd = "pacmanDown";
      // $tiles.eq(index).addClass("pacmanDown");
      break;
    case 37:
      index--;
      classToAdd = "pacmanLeft";
      // $tiles.eq(index).addClass("pacmanLeft");
      break;
    case 39:
      index++;
      classToAdd = "pacmanRight";
      // $tiles.eq(index).addClass("pacmanRight");
      break;
    }

//Index % gridLength below will change based on grid grid size, when grid is extended will need to update
    if($tiles.eq(index).hasClass('wall') || $tiles.eq(index).hasClass('topWall') || $tiles.eq(index).hasClass('bottomWall') || $tiles.eq(index).hasClass('leftWall') || $tiles.eq(index).hasClass('rightWall')) {
      return false;
    }

    //WIN
    if ($tiles.eq(index).hasClass('win')) {
      clearInterval(int);
      alert("Congratulations you completed the maze! But remember Pacman, your beauty is on the inside!");
       location.reload();
    }
    $player.removeClass('pacmanUp pacmanDown pacmanLeft pacmanRight player');
    // $player.removeClass();
    // $player = $tiles.eq(index).addClass('player');
    $player = $tiles.eq(index).addClass(classToAdd);

    //BONUS
    if ($tiles.eq(index).hasClass('bonus')) {
        points += 5;
        $(".player").removeClass('bonus').addClass('used-bonus');
        $(".pacmanUp").removeClass('bonus').addClass('used-bonus');
        $(".pacmanDown").removeClass('bonus').addClass('used-bonus');
        $(".pacmanLeft").removeClass('bonus').addClass('used-bonus');
        $(".pacmanRight").removeClass('bonus').addClass('used-bonus');
    }
  }

  $(document).on('keydown', movePlayer);

  //Score
  var points = 20;
  var decrease = 1;
  var int;

  function countDown(callback) {
    callback = callback || function(){};
    int = setInterval(function() {
      $("#score").html("Score: " + points);
        points-- || (clearInterval(int), callback());
    }, 1000);
  }
  countDown(function(){
    alert("Time's up! Press OK to try again");
    location.reload();
  });


});
