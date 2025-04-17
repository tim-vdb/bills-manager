"use client"

import { useState } from "react"

type BillPreviewProps = {
  url: string
  icalData: any
  openStates: Record<number, boolean>
  toggleItem: (index: number) => void
}

export default function BillPreview({
  url,
  icalData,
  openStates,
  toggleItem,
}: BillPreviewProps) {

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      {icalData && Array.isArray(icalData.events) && (
        <div className="space-y-4">
          {icalData.events.map((event: any, index: number) => (
            openStates[index] ? (
              <div key={index} className="border p-3 rounded">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{event.summary}</h2>
                  <button
                    className="text-sm text-blue-500"
                    onClick={() => toggleItem(index)}
                  >
                    Masquer
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p>{event.description}</p>
                  <p className="text-xs">
                    {new Date(event.start).toLocaleString()} →{" "}
                    {new Date(event.end).toLocaleString()}
                  </p>
                  <p className="text-xs">Durée : {event.totalHours} h</p>
                </div>
              </div>
            ) : (
              <div key={index} className="border p-3 rounded">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{event.summary}</h2>
                  <button
                    className="text-sm text-blue-500"
                    onClick={() => toggleItem(index)}
                  >
                    Afficher
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  )
}
