import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient()

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user?.id || session.user?.sub // sub = fallback si jamais

    console.log("✅ USER ID SESSION:", userId)

    // const userId = session.user.id

    try {
        const userClients = await prisma.userClient.findMany({
            where: { id: userId },
            include: {
                client: true,
            },
            orderBy: {
                client: {
                    date_creation: "desc",
                },
            },
        })
        console.log("USER ID SESSION:", userId)

        const clients = userClients.map(uc => uc.client)

        return NextResponse.json(clients)
    } catch (err) {
        console.error("Erreur lors de la récupération des clients:", err)
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
    }
}
