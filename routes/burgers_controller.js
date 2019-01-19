// require our burger 
const burger = require("../models/burger.js");

module.exports = function (app) {

    // app.get 
    // corresponds to the selectall() function in ORM
    app.get("/", function (req, res) {
        burger.selectAll()
            .then(function (data) {
                // render index handlebars page and send it the data as a burgers object
                res.render("index", { burgers: data });
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }); // end app.get



    // app.post
    // corresponds to the insertOne() function in ORM
    app.post("/api/burgers", function (req, res) {
        // grab the name of the user input burger and send to the ORM function
        // use req.body since we are grabbing the name off of the request
        burger.insertOne(req.body.name)
            .then(function (data) {
                // respond with the inserted Id
                // res.json({ id: data.insertId})
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }); // end app.post



    // app.put
    // corresponds to the updateOne() function in ORM
    app.put("/api/burgers/:id", function (req, res) {
        // use req.params since we are grabbing the id from the url 
        burger.updateOne(req.params.id)
            .then(function (data) {
                if (data.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }); // end app.put


} // end module.exports = function(app)