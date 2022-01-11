const express = require('express');
const router = express.Router();

const orderRouter = (db) => {

  //GET /order/
  router.get("/", (req, res) => {
    res.render("orders");
  });

    //POST /order/id
    router.post("/:id", (req, res) => {
    });

  return router;

};

//export the router object
module.exports = orderRouter;
