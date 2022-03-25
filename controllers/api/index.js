const router = require("express").Router();

//EXAMPLE NEW ROUTE
const userRoutes = require("./user-routes");
router.use("/user", userRoutes);

module.exports = router;
