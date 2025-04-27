// app/api/user/register/route.ts
import { createUser } from "@/src/lib/user/createUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { lastname, firstname, email, password, companyNumber } = await req.json();

  try {
    const user = await createUser({ lastname, firstname, email, password, companyNumber });
    return NextResponse.json(user);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
