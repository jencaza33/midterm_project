const { response } = require('express');
const db = require('./db');


// Displaying the menu
const getMenuItems = (db) => {
  return db.query(`
  SELECT name, description, price, picture_url
  FROM menu_items;`
  )
    .then((response) => {
      return response.rows;
    });
};
// Get a dish from the menu // used to add to cart the dish
const getMenuItemById = (db, id) => {
  return db.query(`
  SELECT name, description, price, picture_url
  FROM menu_items
  WHERE id = $1;`
  ,[id])
    .then((response) => {
      return response.rows[0];
    });
};
// displaying each order to restaurant
const getOrders = function (db,user_id) {
  return db.query(`
  SELECT orders.*, users.name, users.phone
  FROM orders
  JOIN users ON users.id = user_id
  WHERE user_id = $1
  GROUP BY users.id, orders.id
  ORDER BY orders.created_at;
  `, [user_id])
    .then((response) => {
      return response.rows;
    });
};

//Add order in list of orders. for restaurant
//menu_items is array
const addOrder = function (db, order, menu_items) {
  return db.query(`
  INSERT INTO orders (user_id, total_price)
    VALUES ($1, $2)
    RETURNING *;
  `, [order.user_id, order.total_price ])
  .then((response) => {
    const order = response.rows[0];
    for(let id of menu_items) {
      db.query(`INSERT INTO order_items(order_id, menu_id,qty)
      Values($3, $4)`,[order.id, menu_items])
    }
    return response.rows[0];
  });
};


// Order summary page for the user and also restaurant
const getOrderSummary = function (db, order_id) {
  return db.query(`
  SELECT order_items.order_id, users.name as user_name, users.phone, menu_items.name AS item_name, order_items.qty, menu_items.prep_time
  FROM order_items
  JOIN menu_items ON menu_items.id = menu_id
  JOIN orders ON orders.id = order_id
  JOIN users ON users.id = orders.user_id
  WHERE order_items.order_id = $1
  GROUP BY users.id, menu_items.id, orders.id, order_items.id
  ORDER BY menu_items.prep_time DESC;
  `, [order_id])
  .then((response) => {
    return response.rows;
  });
};



module.exports = {
  getMenuItems,
  getMenuItemById,
  getOrders,
  addOrder,
  getOrderSummary
}
