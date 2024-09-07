import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  postTitle: String,
  postMessage: String,
  postDate: String,

  createdAt: Date, // 作成日時
  updatedAt: Date, // 更新日時
});

export const BlogModel =
  mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
