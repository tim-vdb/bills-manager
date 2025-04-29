// lib/getDataIcal.ts
export async function getDataIcal(url: string, dateFrom: Date, dateTo: Date) {
    if (!url) return null;

    const res = await fetch(
        `/api/get-ical?from=${encodeURIComponent(dateFrom.toISOString())}&to=${encodeURIComponent(dateTo.toISOString())}&url=${encodeURIComponent(url)}`
    );

    if (!res.ok) {
        console.error("Erreur API interne");
        return { error: "API proxy error" };
    }

    const data = await res.json();
    return data;
}
