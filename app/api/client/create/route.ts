// app/api/company/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/src/lib/auth";
import { createClient } from "@/src/lib/client/createClient";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, email, address, tvaRate, urlICAL, hourlyRate } = await req.json();
    console.log("REÇU DU FRONT:", { name, email, address, tvaRate, urlICAL, hourlyRate });

    const client = await createClient({
      name, 
      email, 
      address, 
      tvaRate, 
      urlICAL, 
      hourlyRate,
      userId: session.user.id
    });

    return NextResponse.json(client);

  } catch (err) {
    console.error("Error creating client:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
