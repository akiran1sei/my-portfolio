import mongoose from "mongoose";

// 接続URLは .env.local に MONGODB_URI=mongodb+srv://... と書くのが理想です
// 一旦、現在の変数を活かしつつ、Next.js 16で安定する書き方に直します
const USER_NAME = "akiran1sei";
const USER_PASSWORD = "akiran1sei";
const HOST_NAME = "cluster0.vgefpwi.mongodb.net";
const DB_NAME = "portfolio";

const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    // 【重要】既に接続されている場合は、何度も接続しにいかないようにする
    // Next.jsのホットリロード（開発中の書き換え）で接続が溢れるのを防ぎます
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(uri);
    console.log("成功: MongoDB に接続しました");
  } catch (error) {
    console.log("失敗: MongoDB に接続されていません");
    console.error(error); // 👈 原因を特定するために、詳細なエラーをログに出す
    throw error;
  }
};

export default connectDB;
