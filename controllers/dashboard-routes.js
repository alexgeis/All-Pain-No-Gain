const router = require("express").Router();
const { User, Event } = require("../models");
// cons = require("../utils/auth");
// inser after URL and before async
// "/", async (req, res) => {}

router.get("/", async (req, res) => {
  try {
    // const postData = await Post.findAll({
    //   where: {
    //     userId: req.session.userId,
    //   },
    // });

    // //serialize the incoming data via map array method
    // const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard");
  } catch (err) {
    res.redirect("login");
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
