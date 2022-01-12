const express = require('express');
const router = express.Router();
const helperQueries = require('../lib/helper-queries');

const orderRouter = (db) => {
  //  router.post('/create', (req, res) => {
  //   const order = {user_id: 1, total_price: 0};
  //   const menu_items = [1,2];
  //   helperQueries.addOrder (db, order, menu_items)
  //   .then((orders) => {
  //     res.json({orders});
  //   });
  // });


    //GET /orders/
    router.get('/:id', (req, res) => {
     const order_id = req.params.id;
      helperQueries.getOrderSummary(db, order_id)
        .then((orders) => {
          res.json({orders});
          // res.render("orders");
        });
    });

    return router;
};
// //export the router object
module.exports = orderRouter;
