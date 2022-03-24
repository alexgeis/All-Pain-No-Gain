const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
//EXAMPLE NEW ROUTE BELOW
// const homeRoutes = require('./home-routes.js');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
//EXAMPLE NEW ROUTE BELOW
// router.use("/", homeRoutes);

module.exports = router;
