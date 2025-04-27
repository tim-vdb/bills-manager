// lib/user/deleteClient.ts
import { prisma } from "@/src/lib/prisma";

export async function deleteClient(id: string) {
    try {
        const deletedClient = await prisma.client.delete({
            where: { client_id: id },
        });

        return { message: "Client supprimé avec succès", client: deletedClient };
    } catch (error) {
        console.error("Erreur lors de la suppression du client:", error);
        throw new Error("Erreur lors de la suppression du client");
    }
}
