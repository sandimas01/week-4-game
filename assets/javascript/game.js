
var wins = 0
var losses = 0
var yourSum = 0
$("#wins").text("Wins: " +  wins)
$("#losses").text("Losses: " +  losses)
$("#yourSum").text("Your Sum: " +  yourSum)

var compPick = Math.floor(Math.random() * 101 + 19);
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


function reset(){
    compPick = Math.floor(Math.random() * 101 + 19);
        $("#compPick").text("Comp Pick - " +  compPick);
            console.log("Computer Pick: " + compPick );
    bluePick = Math.floor(Math.random() * 11 + 1);
        console.log("blue Pick: " + bluePick );
    greenPick = Math.floor(Math.random() * 11 + 1);
        console.log("green Pick: " + greenPick );
    redPick = Math.floor(Math.random() * 11 + 1);
        console.log("red Pick: " + redPick );
    yellowPick = Math.floor(Math.random() * 11 + 1);
        console.log("yellow Pick: " + yellowPick );
    yourSum= 0;
        $("#yourSum").text("Your Sum: " +  yourSum)
    } 

function checkResults ()
    {
        if (yourSum === compPick) {
            wins ++;
            $("#wins").text("Wins: " +  wins)
            alert("You win!");
            reset()
        }

        else if (yourSum >= compPick) {
        losses ++;
        $("#losses").text("Losses: " +  losses)
            alert("You lose!!");
            reset()
        }
    }

$(document).ready(function() {
    $("#blue1").on("click", function() {
        yourSum = yourSum + bluePick
        $("#yourSum").text("Your Sum: " +  yourSum);

        checkResults()

    });
  });

  $(document).ready(function() {
    $("#green2").on("click", function() {
        yourSum = yourSum + greenPick
        $("#yourSum").text("Your Sum: " +  yourSum);
        checkResults()
    });
  });

  $(document).ready(function() {
    $("#red3").on("click", function() {
        yourSum = yourSum + redPick
        $("#yourSum").text("Your Sum: " +  yourSum);
        checkResults()
    });
  });

  $(document).ready(function() {
    $("#yellow4").on("click", function() {
        yourSum = yourSum + yellowPick
        $("#yourSum").text("Your Sum: " +  yourSum);
        checkResults()
    });
  });


