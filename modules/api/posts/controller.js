const postModel = require("./model");

const createPost = (title, content, type,createdBy, sortContent, img) =>
  new Promise((resolve, reject) => {
    postModel
      .create({
        title,
        content,
        type,
        createdBy,
        sortContent,
        img
      })
      .then(data => resolve({
        id: data._id
      }))
      .catch(err => reject(err));
  });

const updatePost = (title, content, type, sortContent, img) =>
  new Promise((resolve, reject) => {
    postModel
      .findOneAndUpdate({
        active: true,
        _id: id
      }, {
        title,
        content,
        type,
        sortContent,
        img

      })
      .then(data => resolve({
        id: data._id
      }))
      .catch(err => reject(err));
  });

const getAllPosts = page =>
  new Promise((resolve, reject) => {
    postModel
      .find({
        active: true
      })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 20)
      .limit(20)
      .select("_id img title sortContent createdBy createdAt view")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getPostByType = (page, type) =>
  new Promise((resolve, reject) => {
    postModel
      .find({
        active: true,
        type: type
      })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 20)
      .limit(20)
      .select("_id img title sortContent createdBy createdAt view")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getPost = id =>
  new Promise((resolve, reject) => {
    postModel
      .findOneAndUpdate({
        active: true,
        _id: id
      }, {
        $inc: {
          view: 1
        }
      })
      .select("_id img title content createdBy createdAt view")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
module.exports = {
  createPost,
  getAllPosts,
  getPost,
  getPostByType,
  updatePost
};
