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

    // Save the file
    // const filename = Date.now() + "_" + file.name;
    const filename = file.name;
    const filepath = path.join(
      process.cwd(),
      "public",
      "images",
      "post",
      filename
    );
    await writeFile(filepath, buffer);

    // Save the URL to MongoDB
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
