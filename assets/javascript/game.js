var wins = 0
var losses = 0
$("#wins").text("Wins: " +  wins)
$("#losses").text("Losses: " +  losses)

// Here we use jQuery to select the header with "click-me" as its ID.
// Whenever it is clicked...
$(document).ready(function() {
    $("#blue1").on("click", function() {
      // ... we trigger an alert.
      alert("I've been clicked! blue");
    });
  });

  $(document).ready(function() {
    $("#green2").on("click", function() {
      // ... we trigger an alert.
      alert("I've been clicked! green");
    });
  });

  $(document).ready(function() {
    $("#red3").on("click", function() {
      // ... we trigger an alert.
      alert("I've been clicked! red");
    });
  });

  $(document).ready(function() {
    $("#yellow4").on("click", function() {
      // ... we trigger an alert.
      alert("I've been clicked! yellow");
    });
  });

    var compPick = Math.floor(Math.random() * 101 + 19);
    // We then reveal the computer's pick in the html
    $("#compPick").text("Comp Pick - " +  compPick);
      console.log("Computer Pick: " + compPick );

      var bluePick = Math.floor(Math.random() * 11 + 1);
      console.log("blue Pick: " + bluePick );
      var greenPick = Math.floor(Math.random() * 11 + 1);
      console.log("green Pick: " + greenPick );
      var redPick = Math.floor(Math.random() * 11 + 1);
      console.log("red Pick: " + redPick );
      var yellowPick = Math.floor(Math.random() * 11 + 1);
      console.log("yellow Pick: " + yellowPick );

