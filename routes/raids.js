const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const raidController = require("../controllers/raids");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/raids/:id", raidController.getRaid);

router.post("/createRaid", upload.single("file"), raidController.createPost);

router.put("/likePost/:id", raidController.likePost);

router.delete("/deletePost/:id", raidController.deletePost);

module.exports = router;
