const router = require("express").Router();
const { User, Event } = require("../models/");

// get all posts
router.get("/", async (req, res) => {
  try {
    // const postData = await Post.findAll({
    //   include: [User],
    // });

    // const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get login redirect
router.get("/login", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/dashboard");
  //     return;
  //   }

  res.render("login");
});

// //get signup redirect
// router.get("/signup", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/dashboard");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
