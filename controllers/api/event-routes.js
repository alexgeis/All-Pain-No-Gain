const router = require("express").Router();
const { Event } = require("../../models");

// CREATE new event
// /api/event
router.post("/", async (req, res) => {
  try {
    const dbEventData = await Event.create({
      title: req.body.title,
      duration: req.body.duration,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbEventData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
