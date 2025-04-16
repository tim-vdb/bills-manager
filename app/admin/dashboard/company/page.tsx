// app/register/page.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Label } from "@radix-ui/react-label"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [tvaRate, setTvaRate] = useState(0.2)
    const [urlICAL, setUrlICAL] = useState("")
    const [hourlyRate, setHourlyRate] = useState<number | ''>('')
    const [status, setStatus] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch("/api/company", {
            method: "POST",
            body: JSON.stringify({ "name": name, "email": email, "address": address, "status": status, tva_rate: tvaRate, url_ICAL: urlICAL, hourly_rate: hourlyRate }),
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
                    <Label>
                        Name :
                        <Input required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label>
                        Email :
                        <Input
                            required
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label>
                        Address :
                        <Input
                            required
                            type="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label>
                        TVA rate :
                        <Input step={0.1} min={0} max={1}
                            type="number"
                            placeholder="0.20"
                            value={tvaRate}
                            onChange={(e) => setTvaRate(parseFloat(e.target.value))}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label>
                        Hourly rate :
                        <Input step={0.1}
                            type="number"
                            value={hourlyRate}
                            onChange={(e) => {
                                const value = e.target.value
                                setHourlyRate(value === '' ? '' : parseFloat(value))
                            }}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
                    </Label>
                    <Label >
                        URL ICAL :
                        <Input
                            type="text"
                            value={urlICAL}
                            onChange={(e) => setUrlICAL(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <select value={status} id="" onChange={(e) => setStatus(e.target.value)} required>
                        <option value="" disabled>Select status</option>
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
