// app/api/register/route.ts
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"; // si alias "@/generated" fonctionne


const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { lastname, firstname, email, password, companyNumber } = await req.json()

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 })
  }

  const hashedPassword = await hash(password, 10)

  const user = await prisma.user.create({
    data: { last_name: lastname, first_name: firstname, email, password: hashedPassword, company_number: companyNumber },
  })

  return NextResponse.json(user)
}
