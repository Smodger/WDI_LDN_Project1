$(function(){

//INITIALISE
//need to add placeholder, 'click here to start'
//need to make it so clickEvent only can happen once
  $(".tile").click(function(clickEvent){
    var targetId = clickEvent.target.id;

    $("#" + targetId).css("background-color", "yellow");
    console.log("snap", clickEvent);
  });



  var gridLength = 3; //will need to make this adaptive rather than fixed
  var moves = 0; //move counter
  var currentTile = document.getElementById("t5");
  //var $currentTile = $("#t5");

  function movement () {
    document.addEventListener("keydown", function (keyboardEvent) {
      console.log(keyboardEvent);
      if (keyboardEvent.code === "ArrowDown") {
        (currentTile + gridLength).css("background-color", "yellow");
        moves ++;
      } else if
      (keyboardEvent.code === "ArrowUp") {
        (currentTile - gridLength).css("background-color", "yellow");
        moves ++;
      } else if
      (keyboardEvent.code === "ArrowLeft") {
        (currentTile --).css("background-color", "yellow");
        moves ++;
      } else if
      (keyboardEvent.code === "ArrowRight") {
        (currentTile ++).css("background-color", "yellow");
        moves ++;
      }
    });
  }
  movement();

});
