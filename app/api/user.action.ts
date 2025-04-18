"use server";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./auth/[...nextauth]/route";

export async function deleteClientAction(id: string) {
    const session = await getServerSession(authOptions)
    if (!session) {
        return { error: "Non authentifié" }
    }

    try {
        await prisma.client.delete({
            where: { client_id: id },
        })

        return { message: "Delete !!!" }
    } catch (error) {
        console.error("Erreur suppression :", error)
        return { error: "Erreur lors de la suppression" }
    }
};