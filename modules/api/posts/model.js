const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = new Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    content: { type: String, default: "" },
    createdBy: { type: String, required: true },
    highLight: { type: Boolean, default: true },
    view: { type: Number, default: 0 },
    sortContent: { type: String, default: "" },
    active: { type: Boolean, default: true }
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("posts", postModel);