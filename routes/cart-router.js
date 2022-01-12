const express = require('express');
const router = express.Router();

const cartRouter = (db) => {

  //GET /cart/
  router.get("/", (req, res) => {
    const userId = req.session.userId || '';

    // User is not logged in
    if (!userId) {
      res.redirect('/login');
    }

    res.render("cart");
  });

  //POST /cart/
  router.post("/", (req, res) => {
  });

  return router;

};

//export the router object
module.exports = cartRouter;
