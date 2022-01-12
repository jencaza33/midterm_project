const express = require('express');
const router = express.Router();
const userQueries = require('../lib/user-queries');

const userRouter = (db) => {

  //GET /users/
  router.get('/', (req, res) => {
    userQueries.getUsers(db)
      .then((users) => {
        res.json(users);
      });
  });

  //GET /users/:id
  router.get('/:id', (req, res) => {
    userQueries.getUserById(db, req.params.id)
      .then((user) => {
        res.json(user);
      });
  });

  return router;

};

//export the router object
module.exports = userRouter;


