// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'user_id',
  keys: ['a long long hard to crack key', 'a much longer key to crack']
}));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const menu_itemsRoutes = require("./routes/menu_items");
const order_itemsRoutes = require("./routes/order_items");
//
const userRouter = require("./routes/user-router");
const menuRouter = require('./routes/menu-router');
const cartRouter = require('./routes/cart-router');
const orderRouter = require('./routes/order-router');
const checkoutRouter = require('./routes/checkout-router');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes(db));
app.use("/menu_items", menu_itemsRoutes(db));
app.use("/order_items", order_itemsRoutes(db));
//
app.use("/users", userRouter(db));
app.use("/order_menu", menuRouter(db));
app.use("/cart", cartRouter(db));
app.use("/order", orderRouter(db));
app.use("/checkout", checkoutRouter(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file! Separate them into separate routes files (see above).

app.get("/", (req, res) => {

   //set cookie upon loading homepage to 1; need to attach to database later
   req.session["user_id"] = 1;

  // assign session object's user_id key to user variable in order to pass it to templateVars as a variable to be used on the front end
  const user = req.session.user_id;
  const templateVars = { user };
  res.render("index", templateVars);
});

app.get("/order_signup", (req, res) => {
  const templateVars = { user: null };
  res.render("order_signup", templateVars);

});



// POST ADD TO CART BUTTON TO CHECKOUT CART (USING NEW PATH ORDER_ITEMS SO IT WON'T DISTURB ORDER_INDEX)




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
