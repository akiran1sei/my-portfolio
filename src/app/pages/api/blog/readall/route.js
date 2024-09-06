import connectDB from "@/utils/database";
import { BlogModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const BlogData = await BlogModel.find({});

    return NextResponse.json({
      message: "読み込み完了しました",
      value: BlogData,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "読み込みエラーです",
      status: 500,
    });
  }
}
