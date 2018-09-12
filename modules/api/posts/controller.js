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
      .skip((page - 1) * 5)
      .limit(5)
      .select("_id img title sortContent createdBy createdAt view type")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
  const getPostHighlight = () =>
  new Promise((resolve, reject) => {
    postModel
      .find({
        active: true,
        highLight : true
      })
      .sort({
        createdAt: -1
      })
      .limit(4)
      .select("_id title sortContent createdBy createdAt type")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
  const count = function () {
    return new Promise((resolve, reject) => {
      postModel
        .countDocuments({
          active: true
        })
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  
  const countType = function (type) {
    return new Promise((resolve, reject) => {
      postModel
        .countDocuments({
          active: true,
          type : type
        })
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  const countAuth = function (auth) {
    return new Promise((resolve, reject) => {
      postModel
        .countDocuments({
          active: true,
          createdBy : auth
        })
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

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
      .skip((page - 1) * 5)
      .limit(5)
      .select("_id img title sortContent createdBy createdAt view")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

  const getPostByAuth = (page, auth) =>
  new Promise((resolve, reject) => {
    postModel
      .find({
        active: true,
        createdBy: auth
      })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 5)
      .limit(5)
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
  updatePost,
  getPostByAuth,
  count,
  countType,
  countAuth,
  getPostHighlight
};
