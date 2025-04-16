// app/api/register/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"; // si alias "@/generated" fonctionne
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";


const prisma = new PrismaClient()

export async function POST(req: Request) {
    const session = getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { startDate, endDate, clients } = await req.json()

    const client = clients.map(() => (client.url_ICAL, client.client_id))


    const date_ICAL = await prisma.iCAL.create({
        data: { date_start: startDate, date_end: endDate, url: client.url_ICAL, client_id: client.client_id},
    })

    return NextResponse.json(date_ICAL)
}
