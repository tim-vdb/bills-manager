"use server"

export async function icalFetchAction(url: string) {
    if (!url) return null

    const encodedUrl = encodeURIComponent(url)
    console.log(encodedUrl)
    try {
        const res = await fetch(
            `https://ical.mathieutu.dev/json?from=2025-04-12&to=2025-04-26&summary=&sort=date-asc&grouped=on&url=${encodedUrl}`
        )

        if (!res.ok) throw new Error("Fetch failed")

        const contentType = res.headers.get("content-type")

        if (!contentType?.includes("application/json")) {
            const text = await res.text()
            console.error("Réponse non-JSON:", text.slice(0, 200))
            throw new Error("Réponse inattendue, pas du JSON")
        }

        const data = await res.json()
        return data
    } catch (err) {
        console.error("Erreur iCal:", err)
        return { error: "Impossible de récupérer les données iCal" }
    }
}
