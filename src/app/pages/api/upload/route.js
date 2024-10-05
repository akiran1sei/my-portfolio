// app/pages/api/upload/route.js
import { put } from "@vercel/blob";
import connectDB from "@/utils/database";
import { ImageModel } from "@/utils/schemaModels";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const filename = req.nextUrl.searchParams.get("filename");

  if (!filename) {
    return new Response(JSON.stringify({ error: "Filename is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await connectDB();

    const blob = await put(`public/images/post/${filename}`, req.body, {
      access: "public",
    });

    const image = await ImageModel.create({ url: blob.url });

    return new Response(JSON.stringify(blob), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in upload:", error);
    return new Response(JSON.stringify({ error: "Error uploading file" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
