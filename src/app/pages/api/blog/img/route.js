import connectDB from "@/utils/database";
import { ImageModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ImageData = await ImageModel.find({});

    return NextResponse.json({
      message: "画像読み込み完了しました",
      value: ImageData,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "画像読み込みエラーです",
      status: 500,
    });
  }
}
