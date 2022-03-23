const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     // Stored in milliseconds (86400 === 1 day)
//     maxAge: 86400,
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };
// app.use(session(sess));
// app.use(session(process.env.sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
