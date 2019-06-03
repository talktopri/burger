// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
    //   var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: true
      };
      console.log(id);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
        //   console.log("changed Devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#new-burger-submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#new-burger-text").val().trim(),
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });