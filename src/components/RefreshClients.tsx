'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function RefreshClients() {
    const [clients, setClients] = useState<any[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch("/api/company/list")
                const data = await res.json()
                if (res.ok) {
                    setClients(data)
                } else {
                    console.error("Erreur récupération clients:", data.error)
                }
            } catch (err) {
                console.error("Erreur fetch clients:", err)
            }
        }

        fetchClients()

    }, [router])

    const refreshPage = () => {
        router.refresh()
    }

    return (
        <div>
            {clients.length === 0 ? (
                <p>Loading clients...</p>
            ) : (
                <div>
                    {clients.map((client) => (
                        <div key={client.client_id} className="p-4 shadow-md rounded-md bg-gray-50">
                            <p className="font-semibold">{client.name}</p>
                            <p>{client.email}</p>
                            <button
                                onClick={() => {
                                    console.log(`Client ${client.name} supprimé.`)
                                    refreshPage()
                                }}
                                className="text-red-500"
                            >
                                Supprimer
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
