const router = require("express").Router();

//EXAMPLE NEW ROUTE
const userRoutes = require("./user-routes");
const eventRoutes = require("./event-routes");
router.use("/user", userRoutes);
router.use("/event", eventRoutes);

module.exports = router;
