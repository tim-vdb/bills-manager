import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

export default async function Layout(props: PropsWithChildren) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/admin/auth/login")
    }

    return (
        <div>{props.children}</div>
    )
}
