import { NextResponse } from "next/server";
// import { auth } from "@/firebase/firebaseAdmin";

// export async function POST(request: Request) {
//   const { token } = await request.json();
//   console.log("Token received in /api/token:", token);

//   try {
//     const decodedToken = await auth.verifyIdToken(token);
//     console.log("Decoded token:", decodedToken);
//     return NextResponse.json({ uid: decodedToken.uid, valid: true });
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     return NextResponse.json(
//       { error: "Invalid token", valid: false },
//       { status: 401 }
//     );
//   }
// }
