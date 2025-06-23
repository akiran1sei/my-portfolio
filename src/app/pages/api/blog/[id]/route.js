import connectDB from "@/utils/database";
import { BlogModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  // 第二引数を { params } に修正
  try {
    await connectDB();

    const resolvedParams = await context.params;
    const postId = resolvedParams.id;

    const BlogSingleData = await BlogModel.findOne({ _id: postId });

    if (!BlogSingleData) {
      // データが見つからない場合のハンドリングを追加
      return NextResponse.json(
        { message: "ブログデータが見つかりませんでした" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "読み込み完了しました",
        value: BlogSingleData,
      },
      { status: 200 }
    ); // status は NextResponse.json の第二引数に渡す
  } catch (error) {
    console.error("データ読み込みエラー:", error); // エラーログの改善
    return NextResponse.json(
      {
        message: "読み込みエラーです",
        error: error.message, // エラーメッセージも返すことを検討
      },
      { status: 500 }
    ); // status は NextResponse.json の第二引数に渡す
  }
}
