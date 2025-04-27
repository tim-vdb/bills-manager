import SessionWrapper from '@/src/components/SessionWrapper'
import { authOptions } from '@/src/lib/auth'
import { getServerSession } from 'next-auth'
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
