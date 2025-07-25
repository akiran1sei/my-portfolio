import { put } from "@vercel/blob";
import connectDB from "@/utils/database";
import { ImageModel } from "@/utils/schemaModels";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const text = formData.get("text");

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];

  if (
    !file ||
    file.size > MAX_FILE_SIZE ||
    !ALLOWED_FILE_TYPES.includes(file.type)
  ) {
    return new Response(JSON.stringify({ error: "Invalid file" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const filename = file.name;

  try {
    await connectDB();

    const blob = await put(
      `public/images/post/${encodeURIComponent(filename)}`,
      file,
      {
        access: "public",
        // ここを修正: テンプレートリテラルを削除し、直接 process.env.BLOB_READ_WRITE_TOKEN を渡す
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }
    );

    const image = await ImageModel.create({ url: blob.url, name: text });

    return new Response(
      JSON.stringify({ message: "Upload successful", url: blob.url }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in upload:", error);
    // エラーメッセージをより具体的に返すことを検討するとデバッグが楽になります
    return new Response(
      JSON.stringify({ error: "Error uploading file", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
