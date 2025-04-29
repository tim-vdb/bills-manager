// app/api/get-ical/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const url = searchParams.get("url");

    if (!from || !to || !url) {
        return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    const targetUrl = `https://ical.mathieutu.dev/json?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&summary=&sort=date-asc&grouped=on&url=${encodeURIComponent(url)}`;

    try {
        const res = await fetch(targetUrl);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Proxy error:", err);
        return NextResponse.json({ error: "iCal fetch failed" }, { status: 500 });
    }
}
