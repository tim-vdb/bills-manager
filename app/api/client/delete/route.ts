// /api/client/delete/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { deleteClient } from "@/src/lib/client/deleteClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { clientId } = await req.json();

    try {
        const result = await deleteClient(clientId);
        return NextResponse.json({ message: result.message });
    } catch (err) {
        return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }
}
