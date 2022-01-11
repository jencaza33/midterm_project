const express = require("express");
const router = express.Router();


module.exports = db => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT *
    FROM orders
    JOIN users ON orders.user_id = users.id
    `)
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
      });
  });

  //Get order by id
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.query(`
    SELECT *
    FROM orders
    WHERE id = $1`
    , [id])
      .then(data => {
        const order = data.rows[0];
        res.json({ order });
      })
      .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
      });
  });

  return router;
};
