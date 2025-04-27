// api/company/list/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/src/lib/auth";
import { getClientByUserId } from "@/src/lib/client/getClientByUserId";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user?.id || session.user?.sub

    try {
        const clients = await getClientByUserId(userId);

        return NextResponse.json(clients)
    } catch (err) {
        console.error("Erreur lors de la récupération des clients:", err)
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
    }
}
