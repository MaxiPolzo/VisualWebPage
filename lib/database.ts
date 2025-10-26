import { createClient } from "@supabase/supabase-js"

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Cliente para el lado del cliente (público)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para el lado del servidor (con permisos de admin)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Tipos de la base de datos
export interface User {
  id: string
  email: string
  password_hash: string
  role: "admin" | "client"
  name: string
  restaurant_name?: string
  phone?: string
  created_at: string
  updated_at: string
  is_active: boolean
}

export interface Project {
  id: string
  client_id: string
  title: string
  description?: string
  service_type: string
  status: "pending" | "in_progress" | "in_review" | "completed" | "cancelled"
  priority: "low" | "medium" | "high" | "urgent"
  estimated_delivery?: string
  actual_delivery?: string
  budget?: number
  notes?: string
  created_at: string
  updated_at: string
}

export interface ProjectUpdate {
  id: string
  project_id: string
  admin_id?: string
  title: string
  description: string
  status_change?: string
  is_visible_to_client: boolean
  created_at: string
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
  reviewed_at?: string
  reviewed_by?: string
}
