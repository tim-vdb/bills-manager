// lib/user/deleteUser.ts
import { prisma } from "@/src/lib/prisma";

export async function deleteUser(id: string | undefined) {
    try {
        const deletedUser = await prisma.user.delete({
            where: { id: id },
        });

        return { message: "User successfully deleted", user: deletedUser };
    } catch (error) {
        console.error("Error when deleting user:", error);
        throw new Error("Error when deleting user");
    }
}
