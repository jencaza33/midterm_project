const express = require('express');
const router = express.Router();


//GET /menu/
router.get("/", (req, res) => {
  res.render("new-order");
});

//export the router object
module.exports = router;
