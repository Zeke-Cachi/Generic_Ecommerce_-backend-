# Generic E-Commerce (backend)

This is the backend for a buy-and-sell ecommerce website. 

## Stack used

- Node.js
- Express.js
- MongoDB
- Typescript

### Libraries

- Tsyringe
- Morgan
- Mongoose
- Express-validator
- Cors

---

The backend was made with Node.js, with an emphasis in ES6 classes, loosely following the IoC design pattern. It´s a basic MVC with CRUD capabilities, with an app.ts to run the server and the database, a server.ts to start up the application and a route/controller for user-related and product-related logic. 

---

### Database

The database is hosted on MongoDB Atlas. It has two models, one for the user and another for the product. 
  
