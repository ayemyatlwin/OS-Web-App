import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const getAllUsers = await prisma.user.findMany();
    return NextResponse.json(getAllUsers);
  } catch (error: any) {
    return NextResponse.json({ message: "USER ERROR", error }, { status: 500 });
  }
};
