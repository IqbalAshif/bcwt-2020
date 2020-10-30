"use strict";
// catRoute
const express = require("express");
const multer = require("multer");
const { cat_create } = require("../controllers/catController");
const catController = require("../controllers/catController");
const router = express.Router();
const upload = multer({ dest: "uploads" });

router.get("/", catController.cat_list_get);
router.get("/:id", catController.cat_get_by_id);
router.post("/", upload.single("cat"), catController.cat_create);

router.put('/:id', catController.cat_update);
router.delete('/:id', catController.cat_delete);


/*router.post('/', catController.cat_get_by_id);
router.post("/", upload.single('cat'), (req, res) => {
  console.log("catRoute post", req.body, req.file);
  res.send("trying to add cat...");
});*/

module.exports = router;
