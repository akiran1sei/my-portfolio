import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { CodesModel } from "@/utils/schemaModels";
export async function DELETE(request) {
  const { ids } = await request.json();

  try {
    await connectDB();
    const DeleteItems = await CodesModel.deleteMany({ _id: { $in: ids } });

    return NextResponse.json(
      { message: "Delete request received", value: DeleteItems },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
