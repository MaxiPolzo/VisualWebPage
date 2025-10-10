import { supabaseAdmin } from "./supabase"
import bcrypt from "bcryptjs"
import type { User } from "./supabase"

// Crear usuario
export async function createUser(data: {
  email: string
  password: string
  role: "admin" | "client"
  name: string
  restaurant_name?: string
  phone?: string
}) {
  try {
    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10)

    const { data: result, error } = await supabaseAdmin
      .from("users")
      .insert([
        {
          email: data.email,
          password_hash: hashedPassword,
          role: data.role,
          name: data.name,
          restaurant_name: data.restaurant_name || null,
          phone: data.phone || null,
          is_active: true,
        },
      ])
      .select()
      .single()

    if (error) {
      throw error
    }

    // Eliminar password_hash del resultado
    const { password_hash, ...userWithoutPassword } = result

    return { success: true, data: userWithoutPassword }
  } catch (error) {
    console.error("Error creating user:", error)
    return { success: false, error }
  }
}

// Obtener todos los clientes (para admin)
export async function getAllClients() {
  try {
    const { data, error } = await supabaseAdmin
      .from("users")
      .select("*")
      .eq("role", "client")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    // Eliminar password_hash de todos los usuarios
    const clientsWithoutPassword = data.map(({ password_hash, ...client }) => client)

    return { success: true, data: clientsWithoutPassword }
  } catch (error) {
    console.error("Error fetching clients:", error)
    return { success: false, error }
  }
}

// Actualizar usuario
export async function updateUser(id: string, data: Partial<User> & { password?: string }) {
  try {
    const updateData: any = { ...data, updated_at: new Date().toISOString() }

    // Si hay nueva contraseña, hashearla
    if (data.password) {
      updateData.password_hash = await bcrypt.hash(data.password, 10)
      delete updateData.password
    }

    const { data: result, error } = await supabaseAdmin.from("users").update(updateData).eq("id", id).select().single()

    if (error) {
      throw error
    }

    // Eliminar password_hash del resultado
    const { password_hash, ...userWithoutPassword } = result

    return { success: true, data: userWithoutPassword }
  } catch (error) {
    console.error("Error updating user:", error)
    return { success: false, error }
  }
}

// Desactivar usuario
export async function deactivateUser(id: string) {
  try {
    const { data, error } = await supabaseAdmin
      .from("users")
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error deactivating user:", error)
    return { success: false, error }
  }
}
