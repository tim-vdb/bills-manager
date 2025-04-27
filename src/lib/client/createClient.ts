// lib/createClient.ts
import { prisma } from "@/src/lib/prisma";

export async function createClient({ name, email, address, tvaRate, urlICAL, hourlyRate, userId }: {
    name: string,
    email: string,
    address: string,
    tvaRate: number,
    urlICAL: string,
    hourlyRate: number,
    userId: string
}) {
    const existingClient = await prisma.client.findUnique({ where: { email } });

    if (existingClient) {
        throw new Error("Client already exists");
    }

    const client = await prisma.client.create({
        data: {
            name,
            email,
            address,
            tva_rate: tvaRate,
            url_ICAL: urlICAL,
            hourly_rate: hourlyRate
        },
    });

    await prisma.userClient.create({
        data: {
            user: { connect: { id: userId } },
            client: { connect: { client_id: client.client_id } },
        },
    });

    return client;
}
