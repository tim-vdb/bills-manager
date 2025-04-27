// lib/user/createUser.ts
import { prisma } from "@/src/lib/prisma";
import { hash } from "bcryptjs";

export async function createUser({ lastname, firstname, email, password, companyNumber }: { lastname: string, firstname: string, email: string, password: string, companyNumber: string }) {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        throw new Error("This email already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
        data: {
            last_name: lastname,
            first_name: firstname,
            email,
            password: hashedPassword,
            company_number: companyNumber,
        },
    });

    return user;
}
