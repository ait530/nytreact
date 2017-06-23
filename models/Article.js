// Article Title Model
// ===================

// Use Mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the articleSchema with our schema class
var articleSchema = new Schema({
  // headline, a string, must be entered
  article: {
    type: String,
    required: true,
    unique: true
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // date is just a string
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Article model using the articleSchema
var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
