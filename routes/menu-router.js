const express = require('express');
const router = express.Router();

const menuRouter = (db) => {

  //GET /menu/
  router.get("/", (req, res) => {

    const userId = req.session.user_id || '';

    // User is not logged in, redirect homepage
    if (!userId) {
      res.redirect('/');
    }

    //create query to database in order to grab all the dishes on the menu
    db.query('SELECT * FROM menu_items')
    .then(foodData => {
    const allFood = foodData.rows;

    // assign session object's user_id key to user variable in order to pass it to templateVars as a variable to be used on the front end along with result of database query
    const user = req.session.user_id;
    // const templateVars = { user, allFood };

    res.json({allFood});
    // res.render("new-order", templateVars);
    })
    .catch(err => {
    res
      .status(500)
      .json(err.message);
    });

});

  return router;

};

//export the router object
module.exports = menuRouter;
