import connectDB from "@/utils/database";
import { CodesModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log("body", body);
  const postData = {
    code: body.code,
    codeName: body.codeName,
  };
  try {
    await connectDB();

    const code = await CodesModel.create(postData);
    return NextResponse.json({ message: "追加に成功しました", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "追加に失敗しました",
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();

    const data = await CodesModel.find();
    if (!data) {
      // データが見つからない場合のハンドリングを追加
      return NextResponse.json(
        { message: "コードデータが見つかりませんでした" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "読み込み完了しました",
        value: data,
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
// export async function PUT(request, response) {
//   const data = await CodesModel.findByIdAndUpdate();
// }
// export async function DELETE(request, response) {
//   const data = await CodesModel.findByIdAndDelete();
// }
