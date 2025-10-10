import { SignJWT, jwtVerify } from "jose"
import bcrypt from "bcryptjs"
import { supabaseAdmin } from "./supabase"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key-change-in-production")

export interface User {
  id: string
  email: string
  role: "admin" | "client"
  name: string
  restaurant_name?: string
  phone?: string
  is_active: boolean
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function generateToken(user: User): Promise<string> {
  return new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET)
}

export async function verifyToken(token: string): Promise<{ user: User } | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET)
    return verified.payload as { user: User }
  } catch (error) {
    return null
  }
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  try {
    const { data: user, error } = await supabaseAdmin.from("users").select("*").eq("email", email).single()

    if (error || !user) {
      return null
    }

    const isValid = await comparePasswords(password, user.password_hash)

    if (!isValid) {
      return null
    }

    if (!user.is_active) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      restaurant_name: user.restaurant_name,
      phone: user.phone,
      is_active: user.is_active,
    }
  } catch (error) {
    console.error("Authentication error:", error)
    return null
  }
}
