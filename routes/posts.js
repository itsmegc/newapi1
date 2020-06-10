const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all the post
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit a post

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific post

router.get("/:postID", async (req, res,next) => {
  try {
    const posts = await Post.findById(req.params.postId);

    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});


//delete





//update







module.exports = router;
