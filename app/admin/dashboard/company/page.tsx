// app/register/page.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [status, setStatus] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch("/api/company", {
            method: "POST",
            body: JSON.stringify({ name, email, address, status }),
        })

        if (res.ok) {
            router.push("/admin/dashboard/profil")
        } else {
            alert("error company when added")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-md mx-auto bg-white">
                <h2 className="text-2xl font-bold text-center mb-6">Add a company</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        type="text"
                        placeholder="Nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <select value={status} id="" onChange={(e) => setStatus(e.target.value)}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <Button
                        type="submit"
                        variant="default"
                        className="w-full py-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg"
                    >
                        Add Company
                    </Button>
                </form>
            </Card>
        </div>
    )
}
