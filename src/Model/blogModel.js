const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    trim: true,
  },
  body: {
    type: String,
    required: [true, "Please enter a body of blog"],
  },
  authorId: {
    type: ObjectID,
    ref: "Author",
    required: true,
  },
  tags: [String],
  category: {
    type: String,
    required: [true, "Please enter the category of blog"],
  },
  subcategory: [String],
  deletedAt: Date,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  publishedAt: Date,
  isPublished: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
