const express = require('express');
const router = express.Router();


//GET /
router.get("/", (req, res) => {
  res.render("index");
});

//export the router object
module.exports = router;
