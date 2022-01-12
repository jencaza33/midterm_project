/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();



module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
        console.log(users);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Create a new user
  router.post('/order_signup', (req, res) => {
      const addUser = function (user) {
        return db
          .query(`INSERT INTO users (name, phone, is_restaurant_crew)
            VALUES ($1, $2, $3)
            RETURNING *`, [user.username, user.phoneNumber, false])
          .then((result) => {
            req.session.user_id = result.rows[0].id;
            return result.rows[0];
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      const user = req.body;
      addUser(user).then((newUser) => {
        req.session.user_id = newUser.id;
        res.redirect("/cart");
      })
    })

    // router.get("/order_index", (req, res) => {
    //   const getUserWithPhone = function (phone) {
    //     return db
    //       .query(`SELECT name, phone FROM users WHERE phone = $1`, [phone])
    //       .then((result) => {
    //         return result.rows[0];
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }
    //   getUserWithPhone;
    //   // if (!getUserWithPhone) {
    //   //   return res.redirect('/order_signup');
    //   // }
    //   res.render('order_index');
    // })
  return router;
};
