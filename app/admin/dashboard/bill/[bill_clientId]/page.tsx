// "use client"

import { getClientById } from "@/app/api/getClientById/route"
import PageClient from "./client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { PrismaClient } from "@/generated/prisma"

// import { icalFetchAction } from "@/app/api/ical/icalActions"
// import BillDraft from "@/src/components/bill-draft"
// import BillPreview from "@/src/components/bill-preview"
// import { Button } from "@/src/components/ui/button"
// import { debounce } from "lodash"
// import { useCallback, useEffect, useState, useTransition } from "react"

// export default function Page(props: {
//     params: Promise<{
//         bill_clientId: string;
//     }>;
// }) {
//     const params = await props.params;
//     const bill_clientId = params.bill_clientId;


//     const [url, setUrl] = useState("")
//     const [icalData, setIcalData] = useState<any>(null)
//     const [isPending, startTransition] = useTransition()
//     const [showPreview, setShowPreview] = useState(false)
//     const [dateTo, setDateTo] = useState<Date>(() => new Date())
//     const [dateFrom, setDateFrom] = useState<Date>(() => {
//         const d = new Date()
//         d.setDate(d.getDate() - 30)
//         return d
//     })



//     const [openStates, setOpenStates] = useState<Record<number, boolean>>({})

//     const toggleItem = (index: number) => {
//         setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }))
//     }

//     const fetchData = useCallback(
//         debounce((newUrl: string) => {
//             if (!dateFrom || !dateTo) return

//             startTransition(async () => {
//                 const result = await icalFetchAction(newUrl, dateFrom, dateTo)
//                 setIcalData(result)
//             })
//         }, 600),
//         [dateFrom, dateTo]
//     )

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newUrl = e.target.value
//         setUrl(newUrl)
//         fetchData(newUrl)
//     }

//     useEffect(() => {
//         if (!url) return
//         fetchData(url)
//     }, [dateFrom, dateTo])

//     return (

//         <div className="space-y-6 p-6">

//             {!showPreview &&
//                 <input
//                     type="text"
//                     placeholder="Colle l’URL iCal ici"
//                     value={url}
//                     onChange={handleChange}
//                     className="w-full border rounded p-2"
//                 />
//             }

//             {isPending && <p className="text-gray-500 italic">Chargement...</p>}

//             {
//                 showPreview
//                     ? <BillPreview url={url} icalData={icalData} openStates={openStates} toggleItem={toggleItem} /> :
//                     <BillDraft url={url} icalData={icalData} openStates={openStates} toggleItem={toggleItem} setDateFrom={setDateFrom} setDateTo={setDateTo} />
//             }

//             <Button onClick={() => { setShowPreview(!showPreview) }} className="print:hidden">{showPreview ? "Show Draft" : "Show Preview"}</Button>

//             {/* {icalData && (
//         <div className="bg-gray-100 rounded p-4 text-sm whitespace-pre-wrap">
//           <pre>{JSON.stringify(icalData, null, 2)}</pre>
//         </div>
//       )} */}
//         </div>
//     )
// }

// app/bill/[bill_clientId]/page.tsx

const prisma = new PrismaClient()

export default async function Page({
    params,
}: {
    params: { bill_clientId: string }
}) {
    const bill_clientId = params.bill_clientId

    const client = await getClientById(bill_clientId)
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    if (!userId) return null

    const user = await prisma.user.findUnique({
        where: { id: userId },
    })

    if (!client) return <div>Client introuvable</div>
    console.log(client)

    if (!user) return <div>Utilisateur non connecté</div>
    console.log(user)

    return (
        <PageClient
            initialUrl={client.url_ICAL}
            initialClient={client}
            initialUser={user}
            billClientId={bill_clientId}
        />
    )
}
