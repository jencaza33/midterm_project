const express = require('express');
const router = express.Router();

const menuRouter = (db) => {

  //GET /menu/
  router.get("/", (req, res) => {
    res.render("new-order");
  });

  return router;

};

//export the router object
module.exports = menuRouter;
