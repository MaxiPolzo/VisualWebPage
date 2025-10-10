import { supabaseAdmin } from "./supabase"
import type { Project, ProjectUpdate, ProjectFile } from "./supabase"

export async function getProjectsByClient(clientId: string): Promise<Project[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("projects")
      .select("*")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabaseAdmin.from("projects").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching all projects:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching all projects:", error)
    return []
  }
}

export async function getProjectById(projectId: string): Promise<Project | null> {
  try {
    const { data, error } = await supabaseAdmin.from("projects").select("*").eq("id", projectId).single()

    if (error) {
      console.error("Error fetching project:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function createProject(projectData: {
  client_id: string
  title: string
  description?: string
  service_type: string
  priority?: string
  budget?: number
  deadline?: string
}): Promise<{ success: boolean; project?: Project; error?: string }> {
  try {
    const { data, error } = await supabaseAdmin
      .from("projects")
      .insert({
        ...projectData,
        status: "pending",
        priority: projectData.priority || "medium",
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating project:", error)
      return { success: false, error: error.message }
    }

    return { success: true, project: data }
  } catch (error) {
    console.error("Error creating project:", error)
    return { success: false, error: "Error al crear el proyecto" }
  }
}

export async function updateProjectStatus(
  projectId: string,
  status: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const updateData: any = {
      status,
      updated_at: new Date().toISOString(),
    }

    if (status === "completed") {
      updateData.completed_at = new Date().toISOString()
    }

    const { error } = await supabaseAdmin.from("projects").update(updateData).eq("id", projectId)

    if (error) {
      console.error("Error updating project status:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error updating project status:", error)
    return { success: false, error: "Error al actualizar el estado del proyecto" }
  }
}

export async function getProjectUpdates(projectId: string): Promise<ProjectUpdate[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("project_updates")
      .select("*")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching project updates:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching project updates:", error)
    return []
  }
}

export async function addProjectUpdate(updateData: {
  project_id: string
  title: string
  description: string
  type: "info" | "success" | "warning" | "error"
  created_by?: string
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin.from("project_updates").insert(updateData)

    if (error) {
      console.error("Error adding project update:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error adding project update:", error)
    return { success: false, error: "Error al añadir la actualización" }
  }
}

export async function getProjectFiles(projectId: string): Promise<ProjectFile[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("project_files")
      .select("*")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching project files:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching project files:", error)
    return []
  }
}
