import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SessionWrapper from '@/src/components/SessionWrapper'
import { getServerSession } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

export default async function Layout(props: PropsWithChildren) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <div>
            <SessionWrapper>
                {props.children}
            </SessionWrapper>
        </div>
    )
}
