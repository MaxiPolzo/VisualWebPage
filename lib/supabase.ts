import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Verificar que las variables de entorno estén configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Supabase environment variables are not configured")
}

// Cliente público (para uso en el frontend)
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key",
)

// Cliente admin (para uso en el backend con permisos completos)
export const supabaseAdmin = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseServiceKey || supabaseAnonKey || "placeholder-key",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
)

// Tipos de datos
export interface User {
  id: string
  email: string
  role: "admin" | "client"
  name: string
  restaurant_name?: string
  phone?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface AccessRequest {
  id: string
  name: string
  email: string
  restaurant_name: string
  phone?: string
  message?: string
  status: "pending" | "approved" | "rejected"
  created_at: string
  updated_at: string
  approved_at?: string
  approved_by?: string
}

export interface Project {
  id: string
  client_id: string
  title: string
  description?: string
  service_type: string
  status: "pending" | "in_progress" | "in_review" | "completed" | "cancelled"
  priority: "low" | "medium" | "high" | "urgent"
  budget?: number
  created_at: string
  updated_at: string
  deadline?: string
  completed_at?: string
}

export interface ProjectUpdate {
  id: string
  project_id: string
  title: string
  description: string
  type: "info" | "success" | "warning" | "error"
  created_at: string
  created_by?: string
}

export interface ProjectFile {
  id: string
  project_id: string
  name: string
  url: string
  type?: string
  size?: number
  created_at: string
  uploaded_by?: string
}
