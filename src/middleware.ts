 
  import {
    NextRequest,
    NextResponse
  } from "next/server";
  
  export function middleware(request: NextRequest) {
  
    const url = request.nextUrl.clone();
  
    const {
      pathname,
      origin,
    } = url;

    if (pathname === "/") {
      return NextResponse.redirect(origin + "/components", 301);
    }

    if((pathname === "/test" || pathname === "/test/" || pathname === "test") && process.env.NODE_ENV === "production") {
      return NextResponse.redirect(origin + "/components", 301);
    }
  
    // Add a default return statement to handle all other requests
    return NextResponse.next();
  }
  
  // only applies this middleware to files in the app directory
  export const config = {
    matcher: "/((?!api|static|.*\\..*|_next|admin).*)"
  };
  