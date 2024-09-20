import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  postTitle: String,
  postMessage: String,
  postDate: String,
  postImage: String,
  createdAt: Date, // 作成日時
  updatedAt: Date, // 更新日時
});
const ImageSchema = new Schema({
  name: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});
export const BlogModel =
  mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export const ImageModel =
  mongoose.models.Image || mongoose.model("Image", ImageSchema);
