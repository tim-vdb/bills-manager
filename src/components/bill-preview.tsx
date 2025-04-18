"use client"

import { Client, User } from "@/generated/prisma"
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

type BillPreviewProps = {
  url: string
  icalData: any
  openStates: Record<number, boolean>
  toggleItem: (index: number) => void
  initialClient: Client
  initialUser: User
  lastName: string
  firstName: string
  email: string
  companyNumber: string
  clientName: string
  clientEmail: string
  clientAddress: string
  hourlyRate: number
  tvaRate: number
  totalAmount: number
  reference: string
  IBAN: string,
  BIC: string
  paymentTerms: string
}

export default function BillPreview({
  url,
  icalData,
  openStates,
  toggleItem,
  initialClient,
  initialUser,
  lastName,
  firstName,
  email,
  companyNumber,
  clientName,
  clientEmail,
  clientAddress,
  hourlyRate,
  tvaRate,
  totalAmount,
  reference,
  IBAN,
  BIC,
  paymentTerms,

}: BillPreviewProps) {
  return (
    <div className="space-y-20 p-8">
      <div className="flex items-start gap-10 flex-col sm:flex-row">
        <div className="flex flex-col gap-5 w-full">
          <h2 className="font-medium underline">User informations</h2>
          <p className="whitespace-nowrap">Last Name : {lastName}</p>
          <p className="whitespace-nowrap">First Name : {firstName}</p>
          <p className="whitespace-nowrap">Email : {email}</p>
          <p className="whitespace-nowrap">Company Number : {companyNumber}</p>
        </div>
        <div className="w-full border-2 border-b-slate-900 sm:hidden"></div>
        <div className="flex flex-col gap-5 sm:text-right">
          <h2 className="font-medium underline">Company informations</h2>
          <p className="whitespace-nowrap">Name : {clientName}</p>
          <p className="whitespace-nowrap">Email : {clientEmail}</p>
          <p className="whitespace-nowrap">Address : {clientAddress}</p>
          <p className="whitespace-nowrap">Hourly Rate : {hourlyRate}</p>
          <p className="whitespace-nowrap">TVA Rate : {tvaRate}</p>
          <p className="whitespace-nowrap">Invoice Reference : {reference}</p>
        </div>
      </div>
      <div>
        {icalData && Array.isArray(icalData.events) && (
          <Table className="table-auto w-full print:table print:w-full">
            <TableCaption>List of ICAL Events</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Label</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Hourly Rate</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {icalData.events.map((event: any, index: number) =>
                !openStates[index] ? (
                  <TableRow key={index}>
                    <TableCell className="flex flex-col font-medium">
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-70">{event.summary}</p>
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-70">{new Date(event.start).toLocaleString()}</p>
                      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-70">{new Date(event.end).toLocaleString()}</p>
                    </TableCell>
                    <TableCell>{event.totalHours}</TableCell>
                    <TableCell>{hourlyRate}</TableCell>
                    <TableCell>{(event.totalHours * hourlyRate).toFixed(2)}</TableCell>
                  </TableRow>
                ) : null
              )}
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

        <p className="mt-8 text-sm">
        Thank you for your business. Please make payment within <strong>{paymentTerms}</strong> of the invoice date.
        </p>

        {(IBAN || BIC) && (
          <div className="text-sm mt-2">
            <p>Payment method: <strong>Bank transfer</strong></p>
            {IBAN && <p>IBAN : <strong>{IBAN}</strong></p>}
            {BIC && <p>BIC : <strong>{BIC}</strong></p>}
          </div>
        )}
        <p className="text-xs text-gray-500 mt-6">
        Any service started is due. In the event of late payment, penalties may be applied in accordance with current legislation.
        </p>

        <div className="mt-10 text-sm text-gray-800">
          <p>Signature of the service provider:</p>
          <div className="h-16 border-b border-gray-400 w-64 mt-2"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
        Cette facture a été générée automatiquement. Pour toute question, merci de nous contacter à l'adresse : <strong>contact@yourcompany.com</strong>
        </p>
      </div>
    </div>
  )
}


{/* // <div key={index} className="border p-3 rounded flex justify-between items-center">
//                 <h2 className="font-semibold">{event.summary}</h2>
//                 <button
//                   className="text-sm text-blue-500"
//                   onClick={() => toggleItem(index)}
//                 >
//                   Afficher
//                 </button>
//               </div> */}