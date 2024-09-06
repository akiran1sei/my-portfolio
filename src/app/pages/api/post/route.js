import connectDB from "@/utils/database";
import { BlogModel } from "@/utils/schemaModels";
import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const postData = {
    postTitle: body.postTitle,
    postMessage: body.postMessage,
    postDate: body.postDate,
  };
  try {
    await connectDB();
    await BlogModel.create(postData);
    return NextResponse.json({
      message: "投稿しました",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "投稿に失敗しました",
      status: 500,
    });
  }
}