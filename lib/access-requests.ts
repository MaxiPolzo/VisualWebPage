import { supabaseAdmin } from "./supabase"
import type { AccessRequest } from "./supabase"

export async function createAccessRequest(data: {
  name: string
  email: string
  restaurant_name: string
  phone?: string
  message?: string
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin.from("access_requests").insert({
      name: data.name,
      email: data.email,
      restaurant_name: data.restaurant_name,
      phone: data.phone,
      message: data.message,
      status: "pending",
    })

    if (error) {
      console.error("Error creating access request:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error creating access request:", error)
    return { success: false, error: "Error al crear la solicitud" }
  }
}

export async function getAccessRequests(status?: string): Promise<AccessRequest[]> {
  try {
    let query = supabaseAdmin.from("access_requests").select("*").order("created_at", { ascending: false })

    if (status) {
      query = query.eq("status", status)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching access requests:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching access requests:", error)
    return []
  }
}

export async function updateAccessRequestStatus(
  id: string,
  status: "approved" | "rejected",
  approvedBy: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin
      .from("access_requests")
      .update({
        status,
        approved_at: status === "approved" ? new Date().toISOString() : null,
        approved_by: status === "approved" ? approvedBy : null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)

    if (error) {
      console.error("Error updating access request:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error updating access request:", error)
    return { success: false, error: "Error al actualizar la solicitud" }
  }
}
