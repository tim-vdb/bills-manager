import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export async function getClientById(id: string) {
    return await prisma.client.findUnique({
        where: { client_id: id },
    })
}
