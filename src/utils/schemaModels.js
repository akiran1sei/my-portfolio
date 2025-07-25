import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BlogSchema = new Schema(
  {
    postTitle: String,
    postMessage: String,
    postDate: String,
    postImage: String,
    postImageAlt: String,
    postDraft: Boolean,
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);
const CodesSchema = new Schema({
  code: String,
  codeName: String,
});
const ImageSchema = new Schema({
  name: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});
export const BlogModel =
  mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export const CodesModel =
  mongoose.models.Code || mongoose.model("Code", CodesSchema);
export const ImageModel =
  mongoose.models.Image || mongoose.model("Image", ImageSchema);
