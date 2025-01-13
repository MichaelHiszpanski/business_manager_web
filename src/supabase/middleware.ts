// import { verifyIdToken } from "@/firebase/firebaseAdmin";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // const token = req.cookies.get("token")?.value;
  // console.log("Token from cookies:", token);

  // //const signedUserPages = ["/contact"]; //"/docs"
  // const signedUserPages = ["/xxx"]; //"/contact", "/docs"
  // if (signedUserPages.includes(req.nextUrl.pathname)) {
  //   if (!token) {
  //     const url = req.nextUrl.clone();
  //     url.pathname = "/sign-in";
  //     return NextResponse.redirect(url);
  //   }

  //   const response = await fetch(`${req.nextUrl.origin}/api/token/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ token }),
  //   });

  //   const result = await response.json();

  //   if (!result.valid) {
  //     const url = req.nextUrl.clone();
  //     url.pathname = "/sign-in";
  //     return NextResponse.redirect(url);
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/xxx"], //"/docs", "/contact"
};
