// src / utils / gridfs.js;
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import path from "path";
import crypto from "crypto"; // ファイル名生成用
const USER_NAME = "akiran1sei";
const USER_PASSWORD = "akiran1sei";
const HOST_NAME = "cluster0.vgefpwi.mongodb.net";
const DB_NAME = "portfolio";

const uri = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// GridFSの初期化
let gfs;
mongoose.connection.once("open", () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
});

// 画像を保存する関数
const saveImage = async (req, res) => {
  try {
    const part = req.files.file;
    const originalname = part.name;
    const filename = crypto.randomBytes(16).toString("hex"); // ランダムなファイル名生成

    const writeStream = gfs.createWriteStream({
      filename: filename,
      metadata: {
        originalname: originalname,
      },
    });

    part.mv(writeStream);

    writeStream.on("close", (file) => {
      return res.status(200).send({
        message: "File is uploaded successfully!",
        file: file,
      });
    });
  } catch (error) {
    // エラー発生時にファイルを削除
    if (writeStream) {
      writeStream.end();
      gfs.delete(writeStream._id, (err) => {
        console.error("Error deleting file:", err);
      });
    }
    return res.status(500).send({ error: error.message });
  }
};

// 画像を取得する関数
const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    if (!file) {
      return res.status(404).send({ error: "File not found" });
    }
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
