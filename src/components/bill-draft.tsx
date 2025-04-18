import { Client, User } from "@/generated/prisma"
import { DatePickerWithRange } from "./date-range-picker"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table"
import { Input } from "./ui/input"
import { useState } from "react"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

type BillDraftProps = {
    url: string
    icalData: any
    openStates: Record<number, boolean>
    toggleItem: (index: number) => void
    setDateFrom: React.Dispatch<React.SetStateAction<Date>>
    setDateTo: React.Dispatch<React.SetStateAction<Date>>
    initialClient: Client
    initialUser: User
    lastName: string
    setLastName: React.Dispatch<React.SetStateAction<string>>
    firstName: string
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    companyNumber: string
    setCompanyNumber: React.Dispatch<React.SetStateAction<string>>
    clientName: string
    setClientName: React.Dispatch<React.SetStateAction<string>>
    clientEmail: string
    setClientEmail: React.Dispatch<React.SetStateAction<string>>
    clientAddress: string
    setClientAddress: React.Dispatch<React.SetStateAction<string>>
    hourlyRate: number
    setHourlyRate: React.Dispatch<React.SetStateAction<number>>
    tvaRate: number
    setTvaRate: React.Dispatch<React.SetStateAction<number>>
    totalAmount: number
    reference: string
    setReference: React.Dispatch<React.SetStateAction<string>>
    IBAN: string
    setIBAN: React.Dispatch<React.SetStateAction<string>>
    BIC: string
    setBIC: React.Dispatch<React.SetStateAction<string>>
    paymentTerms: string
    setPaymentTerms: React.Dispatch<React.SetStateAction<string>>
}



export default function BillDraft({
    url,
    icalData,
    openStates,
    toggleItem,
    setDateFrom,
    setDateTo,
    initialClient,
    initialUser,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    email,
    setEmail,
    companyNumber,
    setCompanyNumber,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientAddress,
    setClientAddress,
    hourlyRate,
    setHourlyRate,
    tvaRate,
    setTvaRate,
    totalAmount,
    reference,
    setReference,
    IBAN,
    setIBAN,
    BIC,
    setBIC,
    paymentTerms,
    setPaymentTerms,

}: BillDraftProps) {

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-start gap-10 flex-col sm:flex-row">
                <div className="flex flex-col gap-5 w-full">
                    <h2 className="font-medium underline">User informations</h2>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">Last Name :</p>
                        <Input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} // mettez à jour directement la valeur de lastName
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">First Name :</p>
                        <Input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} // mettez à jour directement la valeur de firstName
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">Email :</p>
                        <Input
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // mettez à jour directement la valeur de email
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">Company Number :</p>
                        <Input
                            placeholder="SIRET/CRN/EIN/BCE..."
                            type="text"
                            value={companyNumber}
                            onChange={(e) => setCompanyNumber(e.target.value)} // mettez à jour directement la valeur de companyNumber
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">IBAN :</p>
                        <Input
                            type="text"
                            value={IBAN}
                            onChange={(e) => setIBAN(e.target.value)} // mettez à jour directement la valeur de companyNumber
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">BIC :</p>
                        <Input
                            type="text"
                            value={BIC}
                            onChange={(e) => setBIC(e.target.value)}
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p className="whitespace-nowrap">Payment Terms :</p>
                        <Input
                            type="text"
                            placeholder="ex: 15 days"
                            value={paymentTerms}
                            onChange={(e) => setPaymentTerms(e.target.value)}
                        />
                    </Label>
                </div>
                <div className="w-full border-2 border-b-slate-900 sm:hidden"></div>
                <div className="flex flex-col gap-5 w-full">
                    <h2 className="font-medium underline">Company informations</h2>
                    <Label className="flex flex-col justify-between items-start">
                        <p>Name :</p>
                        <Input
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)} // Met à jour la valeur de clientName
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p>Email :</p>
                        <Input
                            placeholder="example@gmail.com"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)} // Met à jour la valeur de clientEmail
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p>Address :</p>
                        <Textarea
                            value={clientAddress}
                            onChange={(e) => setClientAddress(e.target.value)} // Met à jour la valeur de clientAddress
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p>Hourly Rate :</p>
                        <Input type="number"
                            value={hourlyRate}
                            min={0}
                            onChange={(e) => setHourlyRate(Number(e.target.value))} // Met à jour la valeur de hourlyRate
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p>TVA Rate :</p>
                        <Input type="number" min={0} step={0.1} max={1}
                            value={tvaRate}
                            onChange={(e) => setTvaRate(Number(e.target.value))} // Met à jour la valeur de tvaRate
                        />
                    </Label>
                    <Label className="flex flex-col justify-between items-start">
                        <p>Invoice Reference :</p>
                        <Input type="text"
                            value={reference}
                            onChange={(e) => setReference(e.target.value)} // Met à jour la valeur de tvaRate
                        />
                    </Label>
                </div>
            </div>
            <div className="space-y-6 p-6">
                {icalData && Array.isArray(icalData.events) && (
                    <Table className="w-full">
                        <TableCaption>List of ICAL Events</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right">Action</TableHead>
                                <TableHead className="w-[200px]">Label</TableHead>
                                <TableHead>Date Start</TableHead>
                                <TableHead>Date End</TableHead>
                                <TableHead>Hours</TableHead>
                                <TableHead>Hourly Rate</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {icalData.events.map((event: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="text-right">
                                        <button
                                            className={`text-sm p-2 px-4 w-20 text-white rounded duration-200 ${openStates[index] ? 'bg-red-500' : 'bg-green-400'
                                                }`}
                                            onClick={() => toggleItem(index)}
                                        >
                                            {openStates[index] ? "Inactive" : "Active"}
                                        </button>
                                    </TableCell>
                                    <TableCell className="font-medium">{event.summary}</TableCell>
                                    <TableCell>{new Date(event.start).toLocaleString()}</TableCell>
                                    <TableCell>{new Date(event.end).toLocaleString()}</TableCell>
                                    <TableCell>{event.totalHours}</TableCell>
                                    <TableCell>{hourlyRate}</TableCell>
                                    <TableCell>{event.totalHours * hourlyRate}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={6} className="text-right">Subtotal</TableCell>
                                <TableCell colSpan={7}>{(totalAmount ?? 0).toFixed(2)}€</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={6} className="text-right">VTA {tvaRate * 100}%</TableCell>
                                <TableCell colSpan={7}>{((totalAmount ?? 0) * tvaRate).toFixed(2)}€</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={6} className="text-right font-bold text-2xl">Total</TableCell>
                                <TableCell colSpan={6} className="font-bold text-2xl">{((totalAmount ?? 0) * (1 + tvaRate)).toFixed(2)}€</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )}
            </div>
        </div>
    )
}

