// lib/client/deleteClient.ts
import { prisma } from "@/src/lib/prisma";

export async function deleteClient(id: string) {
    try {
        const deletedClient = await prisma.client.delete({
            where: { client_id: id },
        });

        return { message: "Customer successfully deleted", client: deletedClient };
    } catch (error) {
        console.error("Error when deleting customer", error);
        throw new Error("Error when deleting customer");
    }
}
