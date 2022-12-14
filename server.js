const express = require ("express");
const sequelize = require ("./config/connection");
const path = require ("path");
const routes = require ("./controllers");
const exphbs = require ("express-handlebars");
const session = require ("express-session");
const SequelizeStore = require ("connect-session-sequelize")(session.Store);
const helpers = require ("./utils/helpers");

require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3001; 

//  session
const sess = {
  secret: 'Super secret secret',
  //stored in milliseconds (86400===1 day)
  cookie: 
  { maxAge: 180000},
  resave: false,
  saveUninitialized: true,
  //sets up session
  store: new SequelizeStore({
    db: sequelize
  })
};
  
  //handlebars initialization
  const hbs = exphbs.create({ helpers });
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  //connected css and js for handlebars 
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(session(sess));
  
  //use routes
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
  });