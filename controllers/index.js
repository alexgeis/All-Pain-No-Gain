const router = require("express").Router();

const apiRoutes = require("./api");
//EXAMPLE NEW ROUTE BELOW
// const homeRoutes = require('./home-routes.js');

router.use("/api", apiRoutes);
//EXAMPLE NEW ROUTE BELOW
// router.use("/", homeRoutes);

module.exports = router;
