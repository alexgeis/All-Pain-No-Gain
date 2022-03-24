const router = require("express").Router();

//EXAMPLE NEW ROUTE
const exRoutes = require("./ex-routes");
const userExRoutes = require("./user-ex-routes");
router.use("/ex", exRoutes);
router.use("/users", userExRoutes);

module.exports = router;
