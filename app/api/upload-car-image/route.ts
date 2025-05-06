import imagekit from "@/lib/imagekit";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { carImageApiSchema } from "@/validation/custom/carImage";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validatedData = validateWithSchema(carImageApiSchema, data);

    const folderPath = `Carvanna/${validatedData.ownerId}`;
    const result = await imagekit.upload({
      file: validatedData.file,
      fileName: `car_image_${Date.now()}`,
      folder: folderPath,
      customMetadata: {
        ownerId: validatedData.ownerId,
      },
    });

    return NextResponse.json({ url: result.url }, { status: 200 });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json(
      { message: "Image upload failed" },
      { status: 500 },
    );
  }
}
