// 💡 追加: このファイル（API）全体を常に動的に実行し、キャッシュを無効化する
export const dynamic = "force-dynamic";

import connectDB from "@/utils/database";
import { BlogModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    // 💡 補足: find().sort({ _id: -1 }) のようにすると、新しい記事が上（先頭）に来るようになります。
    // 必要であれば変更してみてください。
    const BlogData = await BlogModel.find({});

    return NextResponse.json({
      message: "読み込み完了しました",
      value: BlogData,
      status: 200, // ※NextResponse の場合、status は第2引数に入れるのが正式ですが、現状でも動くので一旦このままでOKです。
    });
  } catch (error) {
    return NextResponse.json({
      message: "読み込みエラーです",
      status: 500,
    });
  }
}
