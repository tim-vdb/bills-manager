"use client"

import { icalFetchAction } from "@/app/api/ical/icalActions"
import BillDraft from "@/src/components/bill-draft"
import BillPreview from "@/src/components/bill-preview"
import { Button } from "@/src/components/ui/button"
import { debounce } from "lodash"
import { useCallback, useState, useTransition } from "react"

export default function Page() {
  const [url, setUrl] = useState("")
  const [icalData, setIcalData] = useState<any>(null)
  const [isPending, startTransition] = useTransition()
  const [showPreview, setShowPreview] = useState(false)

  const [openStates, setOpenStates] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const fetchData = useCallback(
    debounce((newUrl: string) => {
      startTransition(async () => {
        const result = await icalFetchAction(newUrl)
        setIcalData(result)
      })
    }, 600),
    []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value
    setUrl(newUrl)
    fetchData(newUrl)
  }

  return (

    <div className="space-y-6 max-w-2xl mx-auto p-6">

      {!showPreview &&
        <input
          type="text"
          placeholder="Colle l’URL iCal ici"
          value={url}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      }

      {isPending && <p className="text-gray-500 italic">Chargement...</p>}

      {
        showPreview
          ? <BillPreview url={url} icalData={icalData} openStates={openStates} toggleItem={toggleItem} /> :
          <BillDraft url={url} icalData={icalData} openStates={openStates} toggleItem={toggleItem} />
      }

      <Button onClick={() => { setShowPreview(!showPreview) }}>{showPreview ? "Show Draft" : "Show Preview"}</Button>

      {/* {icalData && (
        <div className="bg-gray-100 rounded p-4 text-sm whitespace-pre-wrap">
          <pre>{JSON.stringify(icalData, null, 2)}</pre>
        </div>
      )} */}
    </div>
  )
}
