$(function () {

    // add a new burger to the database
    $(".create-form").on("submit", function (event) {
        // prevent the form from redirecting
        event.preventDefault();

        if (($("#burger").val().trim()) == "") {
            alert("enter a burger name")
        }
        else {

            var newBurger = {
                name: $("#burger").val().trim()
            }

            // Send the POST request.
            $.ajax("/api/burgers/", {
                type: "POST",
                data: newBurger
            }).then(function () {

                // i dont know why none of these execute but the database does update
                // and you can see the changes when you manually refresh the page

                console.log("created new burger");
                location.reload();
            }); // end .then

        }
    }); // end on click function for .create-form



    // on click function to devour the burger
    $(".eat-burger").on("click", function (event) {
        bName = $(this).data("name");
        console.log("you clicked on the " + name + " burger ")
        var id = $(this).data("id");
        var eaten = {
            devoured: true
        }
        // var name = $(this).data("name");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function () {
            console.log("you ate the burger");
            // reload the page
            location.reload();
        }); // end .then

    }); // end on click function for .eat-burger


    // click function to delete a devoured burger
    $(".delete-burger").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("you deleted the burger");
            location.reload();
        }) // end .then
    })

}); // end DOM ready function