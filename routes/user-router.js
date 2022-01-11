const express = require('express');
const router = express.Router();
const userQueries = require('../lib/user-queries');

//GET /users/
router.get('/', (req, res) => {
  userQueries.getUsers()
    .then((users) => {
      res.json(users);
    });
});

//GET /users/:id
router.get('/:id', (req, res) => {
  userQueries.getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    });
});

//export the router object
module.exports = router;
