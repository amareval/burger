var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.read(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

//ROUTING TO THE CREATION OF A BURGER

router.post("/", function(req, res) {

  //DEFINED
  // console.log(req.body.burger);

    burger.create(req.body.burger, function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {

    var condition = "id = " + req.body.burger;
    console.log(condition)

    burger.update(condition, function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
  // Export routes for server.js to use.
  module.exports = router;