import connectDB from "@/utils/database";
import { BlogModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    await connectDB();

    const BlogSingleData = await BlogModel.findOne({ _id: response.params.id });

    return NextResponse.json({
      message: "読み込み完了しました",
      value: BlogSingleData,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "読み込みエラーです",
      status: 500,
    });
  }
}
