// require mysql connection in order to perform queries to the database
const connection = require("./connection.js");

// the ORM constructor 
function ORM(table) {

    // set the table variable
    this.table = table;

    // CRUD METHODS FOR UPDATING THE BURGERS


    // APP.GET FUNCTION
    // SELECT ALL()
    this.selectAll = function () {
        const sql = `SELECT * FROM ??`;

        return new Promise(function (resolve, reject) {
            connection.query(sql, table, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        }) // end promise
    }, // end selectAll()


        // APP.POST FUNCTION
        // INSERT ONE()
        this.insertOne = function (name) {
            const sql = `INSERT INTO ?? (burger_name) VALUES (?)`;

            return new Promise(function (resolve, reject) {
                connection.query(sql, [table, name], function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            }) // end promise
        }, // end insertOne()


        // APP.PUT FUNCTION
        // UPDATE ONE()
        this.updateOne = function (id) {
            const sql = `UPDATE ?? SET devoured = true WHERE id = ?`;

            return new Promise(function (resolve, reject) {
                connection.query(sql, [table, id], function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            }) // end promise
        } // end updateOne()

        //app.delete
        this.delete = function(id){
            const sql = "DELETE FROM ?? WHERE id = ?";

            return new Promise(function(resolve, reject){
                connection.query(sql, [table, id], function(err, data){
                    if (err) reject(err);
                    resolve(data);
                });
            }) // end promise
        } // end delete()

} // end ORM constructor

module.exports = ORM;