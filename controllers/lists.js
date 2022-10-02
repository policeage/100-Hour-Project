const cloudinary = require("../middleware/cloudinary");
const Item = require("../models/Item");
const List = require("../models/List")

module.exports = {
  getCraft: async (req, res) => {
    try {
      const lists = await List.find({ user: req.user.id });
      const craftList = await lists.find({ "listType.crafting": true });
      res.render("crafting.ejs", { lists: craftList, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getGather: async (req, res) => {
    try {
      const lists = await List.find({ user: req.user.id });
      const gatherList = await lists.find({ "listType.gathering": true })
      res.render("gathering.ejs", { lists: gatherList, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createList: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        listName: req.body.title,
        listType: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};