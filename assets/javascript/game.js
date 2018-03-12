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