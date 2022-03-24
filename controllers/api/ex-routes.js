const router = require("express").Router();
//EXAMPLE MODEL REQUIRE
const { User, Painting } = require("../models");

// GET all THINGS - Gallery Model - including model Painting - 'homepage' handlebars template
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ["filename", "description"],
      //   },
      // ],
    });

    const galleries = dbUserData.map((x) => x.get({ plain: true }));
    console.log();
    //EXAMPLE SESSION SAVE
    req.session.save(function (err) {
      if (err) {
        console.log(err);
      }
      // function - session saved
    });

    res.render("homepage", {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one THING - Gallery Model - including model Painting - 'gallery' handlebars template
router.get("/thing/:id", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            "id",
            "title",
            "artist",
            "exhibition_date",
            "filename",
            "description",
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render("gallery", { gallery });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
