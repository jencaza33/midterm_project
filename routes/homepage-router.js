const express = require('express');
const router = express.Router();


const homepageRouter = (db) => {

  //GET /
  router.get("/", (req, res) => {
    res.render("index");
  });

  return router;

};

//export the router object
module.exports = homepageRouter;
