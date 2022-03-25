const router = require("express").Router();
const { User, Event } = require("../models/");

// GET homepage.handlebars
// /
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

//get login redirect
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  //if user record in User table does not match the request body username
  if (!user) {
    res.status(400).json({ message: "Account login unsuccessful!" });
    return;
  }
  //if password record in User table does not match the request body password
  const validPassword = user.checkPassword(req.body.password);
  if (!validPassword) {
    res.status(400).json({ message: "Account login unsuccessful!" });
    return;
  }

  req.session.save(() => {
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.loggedIn = true;

    res.json({ user, message: "Login successful!" });
  });
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
