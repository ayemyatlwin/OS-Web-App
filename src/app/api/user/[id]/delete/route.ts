import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export const DELETE = async (request:any,{ params }: any) => {
  try {
    const { id } = params;
    await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: "User has been deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "USER DELETE ERROR", error: error.message },
      { status: 500 }
    );
  }
};
