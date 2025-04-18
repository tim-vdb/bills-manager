'use client'
import * as React from "react"
import { Button } from "@/src/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card } from "@/src/components/ui/card"
import Link from "next/link"
import DeleteClientButton from "@/src/components/delete-client-button"
import toast from "react-hot-toast"

export default function ProfilPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [clients, setClients] = useState<any[]>([])
  const [visibleClients, setVisibleClients] = useState(clients);
  const handleDeleteSuccess = (deletedId: string) => {
    setVisibleClients(prev => prev.filter(client => client.client_id !== deletedId));
  };

  useEffect(() => {
    if (clients?.length > 0) {
      setVisibleClients(clients);
    }
  }, [clients]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
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

  if (!session) return null

  const handleLogout = async () => {
    const res = await signOut({ redirect: false, callbackUrl: "/login" })

    toast.success("Logged out successfully!")
    router.push("/login")
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 relative p-2 sm:p-0">
      <Card className="p-4 shadow-md rounded-md bg-gray-50 w-full sm:w-1/3 sm:h-screen sm:sticky top-0">
        <h2 className="text-xl font-semibold mb-4">Informations about the user : {session?.user?.name}</h2>
        <div className="space-y-2">
          <div className="flex gap-5">
            <span className="font-medium">Nom :</span>
            <span>{session?.user?.name ?? "Utilisateur"}</span>
          </div>
          <div className="flex gap-5">
            <span className="font-medium whitespace-nowrap">Email :</span>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{session?.user?.email}</span>
          </div>
        </div>
        <div className="mt-6 text-center col-span-full">
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full hover:cursor-pointer bg-red-400"
          >
            Logout
          </Button>
        </div>
      </Card>

      <div className="flex flex-col gap-2 w-full sm:w-2/3 relative">
        <Card className="flex justify-center items-center z-10 shadow-md rounded-md bg-gray-50 sm:sticky top-0">
          <div>
            <Link href={"/admin/dashboard/company"} className="flex items-center gap-4 px-8 shadowBlue border-2 border-blue-400 mx-auto duration-200 w-fit shadowBlue py-3 rounded-lg">
              <p>New Client <span className="text-2xl">&#43;</span></p>
              {/* <ion-icon size="large" name="add-outline"></ion-icon> */}
            </Link>
          </div>
        </Card>
        {visibleClients.map((client) => (
          <Card key={client.client_id} className="p-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4">
                Informations about the customer : {client.name}
              </h2>
              <DeleteClientButton
                id={client.client_id}
                onDeleteSuccess={handleDeleteSuccess}
              />
            </div>
            <div className="flex gap-5">
              <span className="font-medium">Nom :</span>
              <span>{client.name}</span>
            </div>
            <div className="flex gap-5">
              <span className="font-medium">Email :</span>
              <span>{client.email}</span>
            </div>
            <div className="flex gap-5">
              <span className="font-medium">Address :</span>
              <span>{client.address}</span>
            </div>
            <Link
              href={`/admin/dashboard/bill/${client.client_id}`}
              className="gap-4 px-8 shadowBlue border-2 border-blue-400 text-center duration-200 w-full shadowBlue py-3 rounded-lg"
            >
              <p>Generate Bill</p>
            </Link>
          </Card>
        ))}

      </div>
    </div>
  )
}
