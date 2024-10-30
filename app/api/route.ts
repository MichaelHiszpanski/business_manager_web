import { NextResponse } from "next/server";
import { auth } from "@/firebase/firebaseAdmin";

export async function POST(request: Request) {
  const { token } = await request.json();

  try {
    const decodedToken = await auth.verifyIdToken(token);
    return NextResponse.json({ uid: decodedToken.uid, valid: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid token", valid: false },
      { status: 401 }
    );
  }
}
