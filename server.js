const express = require ("express");
const sequelize = require ("./config/connection");
const path = require ("path");
const routes = require ("./controllers");
const expressHand = require ("express-handlebars");
const expressSes = require ("express-session");
const sequelizeStore = require ("connect-session-sequelize")(session.store);
const helpers = require ("./utils/helpers");

require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3001; 