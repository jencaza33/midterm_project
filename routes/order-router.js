const express = require('express');
const router = express.Router();
const helperQueries = require('../lib/helper-queries');

const orderRouter = (db) => {
  // GET /order
  router.get('/:id', (req, res) => {
    const order_id = req.params.id;
     helperQueries.getOrderSummary(db, order_id)
       .then((orders) => {
         res.json({orders});
         // res.render("orders");
       })
       .catch(err => {
        res
          .status(500)
          .json(err.message);
        });
   });

  return router;

};

module.exports = orderRouter;
