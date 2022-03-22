const router = require("express").Router();
//EXAMPLE MODEL REQUIRE
// const { Gallery, Painting } = require('../models');

// GET all THINGS - Gallery Model - including model Painting - 'homepage' handlebars template
router.get("/", async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ["filename", "description"],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

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
