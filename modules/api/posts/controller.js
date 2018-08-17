const postModel = require("./model");

const createPost = (title, content,createdBy,img,sortContent ) =>
  new Promise((resolve, reject) => {
    postModel
      .create({
        title, 
        content,
        createdBy,
        img,
        sortContent 
      })
      .then(data => resolve({ id: data._id }))
      .catch(err => reject(err));
  });

  const getAllPosts = page =>
  new Promise((resolve, reject) => {
    postModel
      .find({
        active: true
      })
      .sort({ createdAt: -1 })
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
      .findOne({
        active: true,
        _id: id
      })
      .select("_id img title content createdBy createdAt view") 
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
  module.exports = {
  createPost,
  getAllPosts,
  getPost
};