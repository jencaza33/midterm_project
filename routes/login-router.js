const express = require('express');
const router = express.Router();

const loginRouter = (db) => {

  //POST /login/
  router.post("/", (req, res) => {
  });

  return router;

};

//export the router object
module.exports = loginRouter;
