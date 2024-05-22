import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export const PATCH = async (request: any, { params }: any) => {
  try {
    const body = await request.json();
    const { user_name, name, password, phone_no, email } = body;
    const { id } = params;
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        user_name,
        name,
        password,
        phone_no,
        email,
      },
    });
    if (!updateUser) {
      return NextResponse.json({ message: "USER NOT FOUND" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Successfully updated user!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "UPDATE USER ERROR", error },
      { status: 500 }
    );
  }
};
