"use client"
import { Button } from '@/src/components/ui/button'
import React from 'react'
import { deleteUserAction } from '../user.action'
import { redirect, useRouter } from 'next/navigation'

export default function DeleteUserButton(props: { id: string }) {
    const router = useRouter();
    
    const onDelete = async () => {
        const result = await deleteUserAction(props.id)
    
        if (result.message) {
            redirect("/")
        }
    }

    return (
        <Button onClick={() => { onDelete() }}>
            Delete my account
        </Button>
    )
}
