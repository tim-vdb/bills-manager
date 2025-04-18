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

    }, [router]) // L'effet sera appelé lors du montage et du changement de route

    // Rafraîchir la page avec router.refresh() après une action
    const refreshPage = () => {
        router.refresh() // Cette méthode rafraîchit la page
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
                                    // Simulation de la suppression du client
                                    // Tu peux mettre ici la logique de suppression réelle
                                    console.log(`Client ${client.name} supprimé.`)
                                    refreshPage() // Appel de router.refresh() après suppression
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
