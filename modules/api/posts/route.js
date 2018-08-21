const express = require("express");
const router = express.Router();

const postController = require("./controller");

router.get("/", (req, res) => {
    postController
    .getAllPosts(req.query.page || 1)
    .then(posts =>{
      res.send(posts)})
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
router.get("/type/:type", (req, res) => {
  postController
  .getPostByType(req.query.page || 1,req.params.type)
  .then(posts =>{
    res.send(posts)})
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

router.post("/", (req, res) => {
    let post = JSON.parse(req.query.post);
    postController
      .createPost(post.title,post.content,post.type,post.createdBy,post.sortContent,post.img)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  });

  router.put("/:id", (req, res) => {
    let post = JSON.parse(req.query.post);
    postController
      .updatePost(post.title,post.content,post.type,post.img,post.sortContent)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  });

  router.get("/:id", (req, res) => {
    postController.getPost(req.params.id)
      .then(post => {
        res.send(post)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  });

module.exports = router;