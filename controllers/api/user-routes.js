const router = require("express").Router();
const { User } = require("../../models");

// GET all user info
// /api/user
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    //serialize the incoming data via map array method
    const userD = userData.map((x) => x.get({ plain: true }));
    res.json(userD);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE new user
// /api/user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
// /api/user/login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
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
      req.session.email = user.email;
      req.session.loggedIn = true;

      res.json({ user, message: "Login successful!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account exists!" });
  }
});

// /api/user/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
