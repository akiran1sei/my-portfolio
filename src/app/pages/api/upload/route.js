import { NextResponse } from "next/server";
import connectDB from "@/utils/database";
import { ImageModel } from "@/utils/schemaModels";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file (with cache control headers)
    const filename = file.name;
    const filepath = path.join(
      process.cwd(),
      "public",
      "images",
      "post",
      filename
    );
    await writeFile(filepath, buffer);

    // Set appropriate cache headers for static files (optional)
    const fileResponse = NextResponse.next();
    const expires = new Date(Date.now() + 259200000); // 30 days
    fileResponse.headers.set(
      "Cache-Control",
      `public, max-age=${Math.floor(expires.getTime() / 1000)}`
    );
    fileResponse.headers.set("Expires", expires.toUTCString());

    // Save the URL to MongoDB (no cache control needed)
    const fileUrl = `/images/post/${filename}`;
    await ImageModel.create({ url: fileUrl });

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      url: fileUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading file" },
      { status: 500 }
    );
  }
}
