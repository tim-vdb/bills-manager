// lib/getClientById.ts
import { prisma } from "@/src/lib/prisma"

export async function getClientById(id: string) {
    return await prisma.client.findUnique({
        where: { client_id: id },
    })
}