"use server";
import bcrypt from 'bcryptjs';
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export const createUserAction = async (user: {
    name: string,
    company_number: string,
    email: string,
    password: string,
    confirm_password: string,
}) => {
    const EmailExist = await prisma.user.findUnique({
        where: { email: user.email },
    });

    if (!EmailExist) {
        if (user.password === user.confirm_password) {
            const newUser = await prisma.user.create({
                data: {
                    name: user.name,
                    company_number: user.company_number,
                    email: user.email,
                    password: await bcrypt.hash(user.password, 10),
                }
            })

            redirect(`/user/${newUser.id}`);
        } else {
            return {
                error: "Your confirmation of password is not the same with the specified password."
            }
        }
    } else {
        return {
            error: "We're sorry, your email already exists"
        }
    }
}

export async function deleteUserAction(id: string) {
    await prisma.user.delete({
        where: {
            id,
        },
    });

    redirect("/")
};