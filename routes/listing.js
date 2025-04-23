const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedin, isOwner, validateListing } = require("../middleware");
const listingController = require("../controllers/listing");
const multer = require("multer");
const {storage} = require("../cloudConfig")
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedin,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// New route
router.get("/new", isLoggedin, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedin,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedin, isOwner, wrapAsync(listingController.deleteListing));

// Edit route
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

// Search route
router.get("/search/:destination", wrapAsync(listingController.searchListing));

// Category route
router.get("/category/:clickedId",wrapAsync(listingController.categoryListing))

module.exports = router;
