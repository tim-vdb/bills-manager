// /api/client/delete/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { NextResponse } from "next/server";
import { deleteUser } from "@/src/lib/user/deleteUser";

export async function POST() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "You're not connected" }, { status: 401 });
    }

    const userIdFromSession = session?.user.id

    try {
        const result = await deleteUser(userIdFromSession);
        return NextResponse.json({ message: result.message });
    } catch (err) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 401 });
    }
}
