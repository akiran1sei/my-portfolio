import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  postTitle: String,
  postMessage: String,
  postDate: String,
});
export const BlogModel =
  mongoose.model.Blog || mongoose.model("Blog", BlogSchema);
