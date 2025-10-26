import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value

  // Rutas protegidas
  const protectedRoutes = ["/admin", "/cliente"]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      const payload = await verifyToken(token)

      if (!payload || !payload.user) {
        return NextResponse.redirect(new URL("/login", request.url))
      }

      // Verificar permisos de ruta
      if (request.nextUrl.pathname.startsWith("/admin") && payload.user.role !== "admin") {
        return NextResponse.redirect(new URL("/cliente", request.url))
      }

      if (request.nextUrl.pathname.startsWith("/cliente") && payload.user.role !== "client") {
        return NextResponse.redirect(new URL("/admin", request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Redirigir usuarios autenticados de /login a su panel
  if (request.nextUrl.pathname === "/login" && token) {
    try {
      const payload = await verifyToken(token)
      if (payload && payload.user) {
        if (payload.user.role === "admin") {
          return NextResponse.redirect(new URL("/admin", request.url))
        } else {
          return NextResponse.redirect(new URL("/cliente", request.url))
        }
      }
    } catch (error) {
      // Token inválido, dejar continuar a login
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/cliente/:path*", "/login"],
}
