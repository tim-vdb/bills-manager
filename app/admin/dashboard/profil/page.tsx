'use client'
import * as React from "react"
import { Button } from "@/src/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"
import Link from "next/link"
import { DatePickerWithRange } from "@/src/components/date-range-picker"

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
    // Appel API pour récupérer les clients
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/company/list") // tu dois créer cette API côté server
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

  if (!session) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Infos utilisateur */}
      <Card className="p-4 shadow-md rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Informations utilisateur</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Nom :</span>
            <span>{session?.user?.name ?? "Utilisateur"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email :</span>
            <span>{session?.user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ID :</span>
            <span>{session?.user?.id}</span>
          </div>
        </div>
      </Card>

      {/* Section clients */}
      <Card className="p-4 shadow-md rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Clients</h2>
        <div className="space-y-2">
          <Link href={"/admin/dashboard/company"} className="w-full">
            Ajouter un client
          </Link>
          <Button variant="destructive" className="w-full">
            Supprimer un client
          </Button>
        </div>
      </Card>

      <DatePickerWithRange clients={clients} />

      {/* Liste des clients */}
      {clients.map((client) => (
        <Card key={client.client_id} className="p-4">
          <p className="font-semibold">{client.name}</p>
          <p>{client.email}</p>
          <input type="text" />
          <Button type="submit" variant="default" className="w-full py-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg">
            Generate Bill
          </Button>
        </Card>
      ))}

      <div className="mt-6 text-center col-span-full">
        <Button
          variant="destructive"
          onClick={() => signOut({ callbackUrl: "/admin/auth/login" })}
          className="w-full"
        >
          Se déconnecter
        </Button>
      </div>
    </div>
  )
}
