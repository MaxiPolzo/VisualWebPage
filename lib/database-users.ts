// Base de datos simulada de usuarios
interface DatabaseUser {
  id: string
  email: string
  password: string
  role: "admin" | "client"
  name: string
  restaurant_name?: string
  phone?: string
  is_active: boolean
  created_at: string
}

// Usuarios registrados en la "base de datos"
const USERS_DATABASE: DatabaseUser[] = [
  {
    id: "admin-1",
    email: "infovisualcraftag@gmail.com",
    password: "VISUALVISUALVISUAL",
    role: "admin",
    name: "Administrador VisualCraft",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "client-1",
    email: "prueba1@gmail.com",
    password: "VISUALVISUALVISUAL",
    role: "client",
    name: "Cliente Prueba",
    restaurant_name: "Restaurante Prueba",
    phone: "+54 9 11 1234-5678",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
  },
]

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "client"
  restaurant_name?: string
  phone?: string
  is_active: boolean
}

export interface AuthResult {
  success: boolean
  user?: User
  token?: string
  error?: string
}

// Función para buscar usuario por email y contraseña
export function findUserByCredentials(email: string, password: string): DatabaseUser | null {
  return USERS_DATABASE.find((user) => user.email === email && user.password === password && user.is_active) || null
}

// Función para buscar usuario por ID
export function findUserById(id: string): DatabaseUser | null {
  return USERS_DATABASE.find((user) => user.id === id && user.is_active) || null
}

// Función para convertir DatabaseUser a User (sin contraseña)
export function toPublicUser(dbUser: DatabaseUser): User {
  return {
    id: dbUser.id,
    email: dbUser.email,
    name: dbUser.name,
    role: dbUser.role,
    restaurant_name: dbUser.restaurant_name,
    phone: dbUser.phone,
    is_active: dbUser.is_active,
  }
}

// Función simple para crear un token
function createSimpleToken(user: User): string {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 horas
  }
  return Buffer.from(JSON.stringify(payload)).toString("base64")
}

// Función para verificar el token
export function verifyToken(token: string): { userId: string; email: string; role: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString())

    // Verificar si el token ha expirado
    if (payload.exp < Date.now()) {
      return null
    }

    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    }
  } catch (error) {
    console.error("Error verificando token:", error)
    return null
  }
}

// Función principal de autenticación
export async function authenticateUser({ email, password }: { email: string; password: string }): Promise<AuthResult> {
  try {
    // Buscar usuario en la base de datos
    const dbUser = findUserByCredentials(email, password)

    if (!dbUser) {
      return {
        success: false,
        error: "Credenciales inválidas",
      }
    }

    // Convertir a usuario público
    const user = toPublicUser(dbUser)

    // Generar token
    const token = createSimpleToken(user)

    return {
      success: true,
      user,
      token,
    }
  } catch (error) {
    console.error("Error en authenticateUser:", error)
    return {
      success: false,
      error: "Error interno del servidor",
    }
  }
}

// Función para obtener usuario por token
export function getUserFromToken(token: string): User | null {
  const payload = verifyToken(token)
  if (!payload) return null

  const dbUser = findUserById(payload.userId)
  if (!dbUser) return null

  return toPublicUser(dbUser)
}
