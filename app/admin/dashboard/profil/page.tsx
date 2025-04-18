'use client'
import * as React from "react"
import { Button } from "@/src/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"
import Link from "next/link"
import DeleteClientButton from "@/src/components/delete-client-button"

export default function ProfilPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [clients, setClients] = useState<any[]>([])

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/auth/login")
    }
  }, [status, router])

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

    if (status === "authenticated") {
      fetchClients()
    }
  }, [status])

  const handleDeleteSuccess = () => {
    // Rafraîchir la page après la suppression
    router.refresh()
  }

  if (!session) return null

  return (
    <div className="flex gap-2 relative">
      <Card className="p-4 shadow-md rounded-md bg-gray-50 w-1/3 h-screen sticky top-0">
        <h2 className="text-xl font-semibold mb-4">Informations utilisateur de {session?.user?.name}</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Nom :</span>
            <span>{session?.user?.name ?? "Utilisateur"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email :</span>
            <span>{session?.user?.email}</span>
          </div>
        </div>
        <div className="mt-6 text-center col-span-full">
          <Button
            variant="destructive"
            onClick={() => signOut({ callbackUrl: "/admin/auth/login" })}
            className="w-full"
          >
            Se déconnecter
          </Button>
        </div>
      </Card>

      <div className="flex flex-col gap-2 w-2/3 relative">
        <Card className="flex justify-center items-center shadow-md rounded-md bg-gray-50 sticky top-0">
          <div>
            <Link href={"/admin/dashboard/company"} className="flex items-center w-fit py-3 px-6 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg text-center">
              <p>New Client</p>
              <ion-icon size="large" name="add-outline"></ion-icon>
            </Link>
          </div>
        </Card>

        {clients.map((client) => (
          <Card key={client.client_id} className="p-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4">Informations de l'entreprise {client.name}</h2>
              <DeleteClientButton
                id={client.client_id}
                onDeleteSuccess={handleDeleteSuccess}
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Nom :</span>
              <span>{client.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email :</span>
              <span>{client.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address :</span>
              <span>{client.address}</span>
            </div>
            <Link href={`/admin/dashboard/bill/${client.client_id}`} className="w-full py-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg text-center">
              <p>Generate Bill</p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
