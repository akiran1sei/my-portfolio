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
    postImage: body.postImage,
    postImageAlt: body.postImageAlt,
    postDraft: body.postDraft,
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
export async function PUT(request) {
  const body = await request.json();

  const postData = {
    postTitle: body.postTitle,
    postMessage: body.postMessage,
    postDate: body.postDate,
    postImage: body.postImage,
    postImageAlt: body.postImageAlt,
    postDraft: body.postDraft,
  };
  try {
    await connectDB();

    await BlogModel.findByIdAndUpdate(body.postId, postData);
    // await BlogModel.create(postData);
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
