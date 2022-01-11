const express = require('express');
const router = express.Router();

const adminRouter = (db) => {

  //GET /admin/
  router.get("/", (req, res) => {
    res.render("owner_history");
  });

  //GET /admin/orders
  router.get("/orders", (req, res) => {
    res.render("owner_history");
  });

  return router;

};

//export the router object
module.exports = adminRouter;
