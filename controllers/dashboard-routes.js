const router = require("express").Router();
const { User, Event } = require("../models");
// cons = require("../utils/auth");
// inser after URL and before async
// "/", async (req, res) => {}

// /dashboard
router.get("/", async (req, res) => {
  try {
    // console.log(req.session);
    // const eventData = await Event.findAll({
    //   // where: {
    //   //   userId: req.session.userId,
    //   // },
    // });

    // //serialize the incoming data via map array method
    // const events = eventData.map((x) => x.get({ plain: true }));
    // console.log(events);

    // res.render("dashboard", { events });
    res.render("dashboard");
    console.log(req.session);
  } catch (err) {
    // res.redirect("login");
    res.json("DIDNT WORK");
  }
});

router.get("/new", (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
