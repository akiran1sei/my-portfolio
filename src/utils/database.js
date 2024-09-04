import mongoose from "mongoose";
const USER_NAME = "akiran1sei";
const USER_PASSWORD = "akiran1sei";
const HOST_NAME = "cluster0.vgefpwi.mongodb.net";
const DB_NAME = "portfolio";

const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
  try {
    await mongoose.connectDB(uri);
    console.log("成功: MongoDB に接続しました");
  } catch (error) {
    console.log("失敗: MongoDB に接続されていません");
    throw new Error();
  }
};
export default connectDB;
