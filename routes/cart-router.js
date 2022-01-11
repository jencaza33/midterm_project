const express = require('express');
const router = express.Router();

const cartRouter = (db) => {

  //GET /cart/
  router.get("/", (req, res) => {
    res.render("cart");
  });

  //POST /cart/
  router.post("/", (req, res) => {
  });

  return router;

};

//export the router object
module.exports = cartRouter;
