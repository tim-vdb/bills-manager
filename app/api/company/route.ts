// app/api/company/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, address, status } = await req.json()

    const existingClient = await prisma.client.findUnique({ where: { email } })

    if (existingClient) {
      return NextResponse.json({ error: "Client already exists" }, { status: 400 })
    }

    const client = await prisma.client.create({
      data: { name, email, address, status },
    })

    return NextResponse.json(client)

  } catch (err) {
    console.error("Error creating client:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
