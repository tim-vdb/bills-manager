// lib/client/getClientByUserId.ts
import { prisma } from "@/src/lib/prisma";

export async function getClientByUserId(userId: string | undefined) {
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
        });

        return userClients.map(uc => uc.client);
    } catch (error) {
        console.error("Error fetching clients:", error);
        throw new Error("Failed to fetch clients");
    }
}
