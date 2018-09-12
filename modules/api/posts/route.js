const express = require("express");
const router = express.Router();

const postController = require("./controller");

const authMiddleware = require('../auth/auth');
router.get("/posts/:page", (req, res) => {
    postController
    .getAllPosts(req.params.page || 1)
    .then(posts =>{
      res.send(posts)})
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/highlight", (req, res) => {
  postController
  .getPostHighlight()
  .then(posts =>{
    res.send(posts)})
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});


router.get("/count", (req, res) => {
  postController
  .count()
  .then(response =>{
    let count = {
      totalPage : response
    };
    res.send(count);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

router.get("/countType/:type", (req, res) => {
  postController
  .countType(req.params.type)
  .then(response =>{
    let count = {
      totalPage : response
    };
    res.send(count);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

router.get("/countAuth/:auth", (req, res) => {
  postController
  .countAuth(req.params.auth)
  .then(response =>{
    let count = {
      totalPage : response
    };
    res.send(count);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});


router.get("/type/:type/:page", (req, res) => {
  postController
  .getPostByType(req.params.page || 1,req.params.type)
  .then(posts =>{
    res.send(posts)
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

router.get("/author/:author/:page", (req, res) => {
  postController
  .getPostByAuth(req.params.page || 1,req.params.author)
  .then(posts =>{
    
    res.send(posts)})
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

router.post("/",authMiddleware.authorize, (req, res) => {

    let post = JSON.parse(req.query.post);
   // let post = req.body;
    post.createdBy = req.session.userInfo.username;
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

  router.put("/:id",authMiddleware.authorize, (req, res) => {
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