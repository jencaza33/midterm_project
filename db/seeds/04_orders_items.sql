INSERT INTO order_items(order_id, menu_id, qty)
VALUES(1,2)
(2,6,1),
(3,3,1),
(4,5,2),
(5,7,2);


DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  qty INTEGER DEFAULT 1
);
