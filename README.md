# FOOD ORDERING Midterm Project
BURGERZ is a food pick-up ordering website built by Jen, Melvin and Khadeeja for the Lighthouse Labs midterm project.
We were given one week to create this website and fulfill all the MVPs.
In this project, we created our fictitious burger restaurant which sells burgers and sides.
Burgerz customers can visit our website, select one or more burgers/meals, add to the cart, then checkout for order.
Once the order is created, the restaurant will get a notification for the new order, and customers will get a notification on the website and SMS which specify how long it will take for the restaurant to fulfill it.
We use Twilio as our API to implement SMS communication from the website to customers and the Burgerz restaurant.
## Final Product
*Landing page*
!["BURGERZ Homepage"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/Homepage.png?raw=true)
*Menu*
!["Menu page"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/Menu.gif?raw=true)
*Cart page*
!["Cart page"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/cart.png?raw=true)
*Checkout page*
!["Checkout page"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/Checkout.png?raw=true)
*Customer Notification*
!["Customer Notification"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/Customer_not.png?raw=true)
*Restaurant Notification*
!["Restaurant Notifcation"](https://github.com/jencaza33/midterm_project/blob/master/public/src/images/Restaurant_not.png?raw=true)

## Getting Started
1. Make new Twilio acount in https://www.twilio.com/ and get your Twilio SID, Token and phone number
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
  - TWILIO_SID=(your Twilio SID)
  - TWILIO_OAUTH=(your Twilio OAUTH)
  - TWILIO_MOBILE=(your Twilio phone number)
4. Install dependencies: `npm i`
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
9. Enjoy!
## Warnings & Tips
- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.
## Dependencies
- Node 10.x or above
- NPM 5.x or above
- PG 6.x
