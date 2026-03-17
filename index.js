const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./src/database/connect");

connectToDatabase();

require("./modules/express");

// const { Person } = require("./person");

// const person = new Person("willians");

// require("./modules/path.js");
// require("./modules/fs");
// console.log(person.sayMyName());

// require("./modules/http");
