const express = require('express');
const router = express.Router();

const cartRouter = (db) => {
  //GET /cart/
  router.get("/", (req, res) => {
    const user_id = req.session.user_id;

    // User is not logged in, redirect to register page
    if (!user_id) {
      res.redirect('/order_signup');
    }

    const user = user_id;
      const templateVars = {user};
      res.render("cart", templateVars);

    // const temporaryCartSession = req.session.cart;
    // console.log(temporaryCartSession)
    // let temporaryCartObject = {};
    // if (temporaryCartSession) {
    //   temporaryCartObject = JSON.parse(temporaryCartSession);
    // } else {
    //   temporaryCartObject = {};
    // }

    // // Selected food items, based on their IDs
    // const userCartSelection = Object.keys(temporaryCartObject);

    // //**NEED QUERY** Query based on the user's selected food items
    // const userCartSelectionQuery = {
    //   text: `SELECT id, name, price, picture_url FROM foods WHERE id = ANY($1)`,
    //   values: [userCartSelection],
    // };

    // // Empty cart check
    // const emptyCartCheck = Object.keys(temporaryCartObject).length === 0;

    // //Cart is empty.
    // if (emptyCartCheck) {
    //   const user = user_id;
    //   const templateVars = {user, cart:[]};
    //   res.render("cart", templateVars);
    // }


    // // Cart is not empty.
    // if (!emptyCartCheck) {
    //   db.query(userCartSelectionQuery)
    //     .then(foodData => {
    //       const foods = foodData.rows;
    //       const cart = [];

    //       for (const foodItem of foods) {
    //         const foodId = foodItem.id;
    //         const foodName = foodItem.name;
    //         const foodPrice = foodItem.price;
    //         const foodQuantity = foodItem.qty;

    //         const eachFood = {id: foodId, name: foodName, price: foodPrice, qty: foodQuantity};
    //         cart.push(eachFood);
    //       }


    //       const user = user_id;
    //       const templateVars = {user, cart};
    //       res.render("cart", templateVars);

    //     })
    //     .catch(err => {
    //       res
    //         .status(500)
    //         .json({ error: err.message });
    //     });
    // }

    console.log(req.session);


  });

  return router;
};


//export the router object
module.exports = cartRouter;
