import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  postTitle: String,
  postMessage: String,
  postDate: String,
});
export const BlogModel =
  mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
