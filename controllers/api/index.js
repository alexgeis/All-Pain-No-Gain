const router = require("express").Router();

//EXAMPLE NEW ROUTE
const userExRoutes = require("./user-ex-routes");
router.use("/users", userExRoutes);

module.exports = router;
