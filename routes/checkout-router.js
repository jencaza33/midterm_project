const express = require('express');
const router = express.Router();

// Twilio API
const accountSid = process.env.TWILIO_SID;
//need to ENV the Sid to prevent app from crashing

const authToken = process.env.TWILIO_OAUTH;
//need to ENV the OAUTH token to prevent app from crashing
const client = require('twilio')(accountSid, authToken);

const checkoutRouter = (db) => {


  //GET /checkout
  router.get("/", (req, res) => {
    res.render("checkout");
  })

  //POST /checkout
  router.post("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);

    // Send SMS to restaurant through Twilio
    //Message from twilio to restaurant
    client.messages
      .create({
        body: 'You have a new order. Please check your order in our website. Burgerz Team.',
        from: process.env.TWILIO_MOBILE,
        to: `+1${req.body.phone}`
        //Please put in a working phone number in the above, in the format: '+16470000000'
      })
      .then(message => console.log(message.sid))
      .catch(console.error)
      .done();

    // Send SMS to customer through Twilio
    client.messages
      .create({
        body: 'Thank you for ordering from Burgerz. Your order will be ready in 20 min.',
        from: process.env.TWILIO_MOBILE,  // from TWilio phone
        to:  `+1${req.body.phone}`//`+${document.getElementById('phone').value}`   // put your phone to test it
      })
      .then(message => {
        console.log(message.sid)
        const phone = req.body.phone;
        console.log('phone', phone);
      })
      .catch(err => {
        console.log('error', err);
        res.redirect('/');
      })
      .done();

    // res.redirect("/");
    req.session = null;

})

return router;

};

//export the router object
module.exports = checkoutRouter;


