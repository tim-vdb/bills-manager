"use server"


import PageClient from "./client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/src/lib/auth"
import { getClientById } from "@/src/lib/client/getClientById"
import { prisma } from "@/src/lib/prisma"

export default async function Page({
    params: paramsPromise,
}: {
    params: Promise<{ bill_clientId: string }>
}) {
    const params = await paramsPromise
    const bill_clientId = params.bill_clientId

    const client = await getClientById(bill_clientId)
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    if (!userId) return null

    const user = await prisma.user.findUnique({
        where: { id: userId },
    })

    if (!client) return <div>Client introuvable</div>

    if (!user) return <div>Utilisateur non connecté</div>

    return (
        <PageClient
            initialClient={client}
            initialUser={user}
        />
    )
}
