const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedin, isAuthor} = require("../middleware")
const reviewController = require("../controllers/review")


// Create review route
router.post(
  "/",
  isLoggedin,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delete review route
router.delete(
  "/:reviewId",
  isLoggedin,
  isAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;