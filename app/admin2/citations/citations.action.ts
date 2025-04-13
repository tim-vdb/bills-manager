"use server";

import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export async function createCitationAction(citation: {
    text: string,
    author: string | null,
}) {
    try {
        await prisma.citation.create({
            data: {
                author: citation.author,
                text: citation.text
            },
        });
    } catch {
        return {
            error: "Error while creating the citation"
        }
    }
    redirect("/admin2");
}

export async function updateCitationAction(id: string, citation: {
    text: string,
    author: string | null,
}) {
    try {
        await prisma.citation.update({
            where: {
                id,
            },
            data: {
                author: citation.author,
                text: citation.text
            },
        });
    } catch {
        return {
            error: "Error while creating the citation"
        }
    }
    redirect("/admin2");
}

export async function deleteCitationAction(id: string) {
    await prisma.citation.delete({
        where: {
            id,
        },
    });

    return {
        message: "Deleted !",
    };
};