import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const body = await request.json();
    const { user_name, name, password, phone_no, email } = body;
    const createUser = await prisma.user.create({
      data: {
        user_name,
        name,
        password,
        phone_no,
        email,
      },
    });
    return NextResponse.json(
      { message: "Successfully created user!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: "USER ERROR", error }, { status: 500 });
  }
};
