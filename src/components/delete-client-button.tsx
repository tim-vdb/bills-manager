"use client"
import { Button } from '@/src/components/ui/button'
import React, { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { deleteClientAction } from '@/app/api/user.action';

export default function DeleteClientButton(props: { id: string; onDeleteSuccess: () => void }) {
    const [isConfirm, setIsConfirm] = useState(false)

    const onDelete = async () => {
        const result = await deleteClientAction(props.id)

        if (result.message) {
            setIsConfirm(false)
            props.onDeleteSuccess() // refetch la liste
        } else if (result.error) {
            alert(result.error)
        }
    }

    return (
        <Button
            onClick={() => {
                if (isConfirm) {
                    onDelete()
                } else {
                    setIsConfirm(true)
                }
            }}
            variant="destructive"
            className="w-fit"
        >
            Supprimer un client
        </Button>
    )
}

