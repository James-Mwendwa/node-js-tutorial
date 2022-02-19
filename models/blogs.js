// const mongoose = require('mongoose');
// const Schema = Schema.mongoose;

// const blogSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },

//     snippet: {
//         type: String,
//         required: true
//     },

//     body: {
//         type: String,
//         required: true
//     }
// }, { timestamps:true });

// //model based on the schema
// //should start with a capital letter

// const Blog = mongoose.model('Blog', blogSchema);

// module.exports = Blog;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;