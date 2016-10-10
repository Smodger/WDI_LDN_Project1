$(function(){

  var $player = $('.player');
  var $tiles = $('li');


  var gridLength = 33;

  var moves = 0; //move counter


  function movePlayer(keyboardEvent) {
    // console.log(keyboardEvent.keyCode);
    var index = $player.index();
    switch(keyboardEvent.keyCode) {
    case 38:
      index -= gridLength;
      break;
    case 40:
      index += gridLength;
      break;
    case 37:
      index--;
      break;
    case 39:
      index++;
      break;
    }

//Index % gridLength below will change based on grid grid size, when grid is extended will need to update
    if($tiles.eq(index).hasClass('wall') || $tiles.eq(index).hasClass('topWall') || $tiles.eq(index).hasClass('bottomWall') || $tiles.eq(index).hasClass('leftWall') || $tiles.eq(index).hasClass('rightWall')) {
      return false;
    }
    //BONUS
  //   if ($tiles.eq(index).hasClass('points'));
  //   function myScore() {
  //     points += 10;
  //     function display() {
  //       $("#score").show();
  //       $("#score").html("Score: " + totalScore);
  // }

    //WIN
    if ($tiles.eq(index).hasClass('win')) {
      clearInterval(int);
      alert("Congratulations you solved the maze!");
      location.reload();
    }
    $player.removeClass('player');
    $player = $tiles.eq(index).addClass('player');
  }

  $(document).on('keydown', movePlayer);



  //timer

  //Score
  var points = 60;
  var decrease = 1;
  var int;

  function countDown(i, callback) {
      callback = callback || function(){};
      int = setInterval(function() {
        $("#score").html("Score: " + i);
          i-- || (clearInterval(int), callback());
      }, 1000);
  }
      countDown(points, function(){
          alert("Countdown done!");
      });


});
