// app/register/page.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import toast from "react-hot-toast"

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
            body: JSON.stringify({ "name": name, "email": email, "address": address, "status": status, tvaRate: tvaRate, urlICAL: urlICAL, hourlyRate: hourlyRate }),
        })

        const data = await res.json()

        if (res?.ok) {
            toast.success("Company added Successfully !")
            router.push("/admin/dashboard") // ou autre route protégée
        } else {
            toast.error(data.error || "Invalid credentials.")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-2/4 mx-auto bg-slate-900 text-white text-center">
                <h2 className="text-2xl font-bold text-center mb-6">Add a company</h2>

                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                    <Label className="flex flex-col items-start gap-2">
                        <p>Name :<span className="text-red-500">*</span></p>
                        <Input required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label className="flex flex-col items-start gap-2">
                        <p>Email :<span className="text-red-500">*</span></p>
                        <Input
                            required
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label className="flex flex-col items-start gap-2">
                        <p>Address :<span className="text-red-500">*</span></p>
                        <textarea
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label className="flex flex-col items-start gap-2">
                        <p>TVA rate :<span className="text-red-500">*</span></p>
                        <Input step={0.1} min={0} max={1}
                            type="number"
                            placeholder="0.20"
                            value={tvaRate}
                            required
                            onChange={(e) => setTvaRate(parseFloat(e.target.value))}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Label className="flex flex-col items-start gap-2">
                        <p>Hourly rate :<span className="text-red-500">*</span></p>
                        <Input
                            type="number"
                            value={hourlyRate}
                            placeholder="ex: 11.88"
                            required
                            onChange={(e) => {
                                const value = e.target.value
                                setHourlyRate(value === '' ? '' : parseFloat(value))
                            }}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
                    </Label>
                    <Label className="flex flex-col items-start gap-2">
                        <p>URL ICAL :</p>
                        <Input
                            type="text"
                            value={urlICAL}
                            onChange={(e) => setUrlICAL(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        />
                    </Label>
                    <Button
                        type="submit"
                        variant="default"
                        className="flex items-center gap-4 px-8 shadowBlue border-2 border-blue-400 mx-auto duration-200 w-fit shadowBlue py-3 text-white rounded-lg"
                    >
                        Add this company
                    </Button>
                </form>
                <Link href={"/admin/dashboard"} className="hover:underline w-fit mx-auto">Back to dashboard</Link>
            </Card>
        </div>
    )
}
