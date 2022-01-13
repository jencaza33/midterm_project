const express = require('express');
const router = express.Router();
const helperQueries = require('../lib/helper-queries');

const cartRouter = (db) => {
  router.post('/', (req, res) => {
    const order = {user_id: 1, total_price: 0};
    const menu_items = [1,2];
    helperQueries.addOrder (db, order, menu_items)
    .then((orders) => {
      res.json({orders});
    });
  });
  return router;
}
//export the router object
module.exports = cartRouter;
