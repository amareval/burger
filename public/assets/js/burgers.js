// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#addingburgers").on("submitbutton", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  console.log("HELLOOOO")
      var newBurger = {
        name: $("#burger").val().trim()
      };
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new BURGER DOG");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  