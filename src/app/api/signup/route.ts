import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  // req.json() is used to parse the JSON body of the request
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ user: { id: newUser.id, email: newUser.email } });
}
