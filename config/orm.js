// Import MySQL connection.
var connection = require("./connection.js");

var tableName = "burgers"

var orm = {
    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    allBurgers: function(tableName, cb) {
      var s = "SELECT * FROM " + tableName;
  
      connection.query(s, function(err, result) {
        cb(result);
      });
    },
  
    // Here our ORM is creating a simple method for adding characters to the database
    // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
    addBurger: function(tableName, name, cb) {
      // var queryString = "INSERT INTO " + tableName;

      // var routeName = burgers.name.replace(/\s+/g, "").toLowerCase();
      // console.log(routeName);
      var queryString = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";
      
//{ Error: ER_WRONG_VALUE_COUNT_ON_ROW: Column count doesn't match value count at row 1

      connection.query(queryString, [name], function(err, result) {
        if (err) {
console.log(err);
        }
      //After the new burger is added the values taht show are blank?
        console.log(result);
        cb(result);

      });
    },
        // NEED TO UPDATE THIS , NOT CORRECT
     eatBurger: function(tableName, condition, cb) {
    var queryString = "UPDATE " + tableName + " SET false WHERE id = ?"

    // UPDATE products SET ? WHERE ?

    // console.log(queryString);
    // console.log(condition);


    connection.query(queryString, [condition], function(err, result) {
      if (err) {
        // console.log(err)
      }

      cb(result);
        });
    }
  };


// Export the orm object for the model (cat.js).
module.exports = orm;
