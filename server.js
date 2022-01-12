// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

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
//import the routers
const userRouter = require("./routes/user-router");
const homepageRouter = require('./routes/homepage-router');
const menuRouter = require('./routes/menu-router');
const cartRouter = require('./routes/cart-router');
const orderRouter = require('./routes/order-router');
const adminRouter = require('./routes/admin-router');
const loginRouter = require('./routes/login-router');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: mount other resources here, using the same pattern above
//pass the routers to express as middleware
app.use("/users", userRouter(db));
app.use("/", homepageRouter(db));
app.use("/menu", menuRouter(db));
app.use("/cart", cartRouter(db));
app.use("/order", orderRouter(db));
app.use("/admin", adminRouter(db));
app.use("/login", loginRouter(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/signup", (req, res) => {
  res.render("_signup");
});

app.post("/signup", (req, res) => {
  console.log("User posted to signup");
  res.status(301).redirect("/");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
