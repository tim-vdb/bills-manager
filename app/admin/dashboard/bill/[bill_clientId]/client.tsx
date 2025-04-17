// app/bill/[bill_clientId]/client.tsx
"use client"

import { icalFetchAction } from "@/app/api/ical/icalActions"
import { Client, User } from "@/generated/prisma"
import BillDraft from "@/src/components/bill-draft"
import BillPreview from "@/src/components/bill-preview"
import { Button } from "@/src/components/ui/button"
import { debounce } from "lodash"
import { useCallback, useEffect, useState, useTransition } from "react"

type Props = {
    initialUrl: string
    initialClient: Client
    initialUser: User
    billClientId: string
}

export default function PageClient({ initialUrl, billClientId, initialClient, initialUser }: Props) {
    const [url, setUrl] = useState(initialUrl)
    const [icalData, setIcalData] = useState<any>(null)
    const [isPending, startTransition] = useTransition()
    const [showPreview, setShowPreview] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    const [dateTo, setDateTo] = useState<Date>(() => new Date())
    const [dateFrom, setDateFrom] = useState<Date>(() => {
        const d = new Date()
        d.setDate(d.getDate() - 30)
        return d
    })

    const [openStates, setOpenStates] = useState<Record<number, boolean>>({})
    const toggleItem = (index: number) => {
        setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }))
    }

    const [lastName, setLastName] = useState(initialUser.last_name)
    const [firstName, setFirstName] = useState(initialUser.first_name)
    const [email, setEmail] = useState(initialUser.email)
    const [companyNumber, setCompanyNumber] = useState(initialUser.company_number)

    const [clientName, setClientName] = useState(initialClient.name)
    const [clientEmail, setClientEmail] = useState(initialClient.email)
    const [clientAddress, setClientAddress] = useState(initialClient.address)
    const [hourlyRate, setHourlyRate] = useState(initialClient.hourly_rate)
    const [tvaRate, setTvaRate] = useState(initialClient.tva_rate)


    const fetchData = useCallback(
        debounce((newUrl: string) => {
            if (!dateFrom || !dateTo) return
            startTransition(async () => {
                const result = await icalFetchAction(newUrl, dateFrom, dateTo)
                setIcalData(result)
            })
        }, 600),
        [dateFrom, dateTo]
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUrl = e.target.value
        setUrl(newUrl)
        fetchData(newUrl)
    }

    useEffect(() => {
        const resultAmount = icalData?.events?.reduce((acc: number, event: any, index: number) => {
            if (!openStates[index]) {
                return acc + (event.totalHours * hourlyRate)
            }
            return acc
        }, 0) || 0
    
        console.log('Calculating total with hourlyRate:', hourlyRate)
        setTotalAmount(resultAmount)
    }, [icalData, openStates, hourlyRate])
    

    useEffect(() => {
        if (url) fetchData(url)
    }, [dateFrom, dateTo])

    return (
        <div className="space-y-6 p-6">
            {!showPreview && (
                <input
                    type="text"
                    placeholder="Colle l’URL iCal ici"
                    value={url}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                />
            )}

            {isPending && <p className="text-gray-500 italic">Chargement...</p>}

            {showPreview ? (
                <BillPreview
                    url={url}
                    icalData={icalData}
                    openStates={openStates}
                    toggleItem={toggleItem}
                    initialClient={initialClient}
                    initialUser={initialUser}
                    lastName={lastName}
                    firstName={firstName}
                    email={email}
                    companyNumber={companyNumber}
                    clientName={clientName}
                    clientEmail={clientEmail}
                    clientAddress={clientAddress}
                    hourlyRate={hourlyRate}
                    tvaRate={tvaRate}
                    totalAmount={totalAmount}
                    
                />
            ) : (
                <BillDraft
                    url={url}
                    icalData={icalData}
                    openStates={openStates}
                    toggleItem={toggleItem}
                    setDateFrom={setDateFrom}
                    setDateTo={setDateTo}
                    initialClient={initialClient}
                    initialUser={initialUser}
                    lastName={lastName}
                    setLastName={setLastName}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    email={email}
                    setEmail={setEmail}
                    companyNumber={companyNumber}
                    setCompanyNumber={setCompanyNumber}
                    clientName={clientName}
                    setClientName={setClientName}
                    clientEmail={clientEmail}
                    setClientEmail={setClientEmail}
                    clientAddress={clientAddress}
                    setClientAddress={setClientAddress}
                    hourlyRate={hourlyRate}
                    setHourlyRate={setHourlyRate}
                    tvaRate={tvaRate}
                    setTvaRate={setTvaRate}
                    totalAmount={totalAmount}
                />
            )}

            <Button onClick={() => setShowPreview(!showPreview)} className="print:hidden">
                {showPreview ? "Show Draft" : "Show Preview"}
            </Button>
        </div>
    )
}
