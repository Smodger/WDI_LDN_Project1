$(function(){

  var $player = $('.player');
  var $tiles = $('li');

  var gridLength = 33;

  function movePlayer(keyboardEvent) {
    // console.log(keyboardEvent.keyCode);
    // $player.removeClass("pacmanLeft").removeClass("pacmanRight").removeClass("pacmanUp").removeClass("pacmanDown");
    var index = $player.index();
    switch(keyboardEvent.keyCode) {
    case 38:
    // $player.addClass("pacmanLeft");
      index -= gridLength;
      break;
    case 40:
    // $player.addClass("pacmanRight");
      index += gridLength;
      break;
    case 37:
    // $player.addClass("pacmanUp");
      index--;
      break;
    case 39:
    // $player.addClass("pacmanDown");
      index++;
      break;
    }

//Index % gridLength below will change based on grid grid size, when grid is extended will need to update
    if($tiles.eq(index).hasClass('wall') || $tiles.eq(index).hasClass('topWall') || $tiles.eq(index).hasClass('bottomWall') || $tiles.eq(index).hasClass('leftWall') || $tiles.eq(index).hasClass('rightWall')) {
      return false;
    }

    //WIN
    if ($tiles.eq(index).hasClass('win')) {
      clearInterval(int);
      alert("Congratulations you solved the maze!");
      location.reload();
    }
    $player.removeClass('player');
    $player = $tiles.eq(index).addClass('player');

        //BONUS
        if ($tiles.eq(index).hasClass('bonus')) {
            points += 10;
            $(".player").removeClass('bonus').addClass('used-bonus');
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
