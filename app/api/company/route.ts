// app/api/company/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { name, email, address, status, tvaRate, urlICAL, hourlyRate } = await req.json()
    console.log("REÇU DU FRONT:", { name, email, address, status, tvaRate, urlICAL, hourlyRate })

    const existingClient = await prisma.client.findUnique({ where: { email } })

    if (existingClient) {
      return NextResponse.json({ error: "Client already exists" }, { status: 400 })
    }

    const client = await prisma.client.create({
      data: { "name": name, "email": email, "address": address, "status": status, "tva_rate": tvaRate, "url_ICAL": urlICAL, "hourly_rate": hourlyRate },
    })

    await prisma.userClient.create({
      data: {
        user: { connect: { id: session.user.id } },
        client: { connect: { client_id: client.client_id } },
      },
    })

    return NextResponse.json(client)

  } catch (err) {
    console.error("Error creating client:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
