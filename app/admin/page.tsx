"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Users, FolderOpen, Plus, Edit, Eye, CheckCircle, AlertCircle, ChefHat, Settings } from "lucide-react"

export default function AdminDashboard() {
  const [clients, setClients] = useState([])
  const [projects, setProjects] = useState([])
  const [selectedClient, setSelectedClient] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isCreateClientOpen, setIsCreateClientOpen] = useState(false)
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false)

  // Datos de ejemplo (en producción vendrían de la base de datos)
  const exampleClients = [
    {
      id: 1,
      name: "José Pérez",
      email: "pepe@laparrilla.com",
      restaurant: "La Parrilla de Pepe",
      phone: "+54 9 11 1234-5678",
      status: "active",
      projects: 2,
      created: "2024-01-15",
    },
    {
      id: 2,
      name: "Mario Rossi",
      email: "mario@pizzeria.com",
      restaurant: "Pizzería Don Mario",
      phone: "+54 9 11 2345-6789",
      status: "active",
      projects: 1,
      created: "2024-02-20",
    },
    {
      id: 3,
      name: "Ana García",
      email: "ana@cafecentral.com",
      restaurant: "Café Central",
      phone: "+54 9 11 3456-7890",
      status: "active",
      projects: 1,
      created: "2024-03-10",
    },
  ]

  const exampleProjects = [
    {
      id: 1,
      title: "Página Web Completa",
      client: "La Parrilla de Pepe",
      clientId: 1,
      service: "web-profesional",
      status: "completed",
      priority: "high",
      budget: 1500,
      progress: 100,
      created: "2024-01-20",
      deadline: "2024-02-20",
    },
    {
      id: 2,
      title: "Menú Digital QR",
      client: "Pizzería Don Mario",
      clientId: 2,
      service: "menu-digital-qr",
      status: "in_progress",
      priority: "medium",
      budget: 800,
      progress: 75,
      created: "2024-02-25",
      deadline: "2024-03-25",
    },
    {
      id: 3,
      title: "Sistema de Reservas",
      client: "Café Central",
      clientId: 3,
      service: "reservas-online",
      status: "in_review",
      priority: "medium",
      budget: 1200,
      progress: 90,
      created: "2024-03-15",
      deadline: "2024-04-15",
    },
  ]

  useEffect(() => {
    setClients(exampleClients)
    setProjects(exampleProjects)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in_progress":
        return "bg-blue-500"
      case "in_review":
        return "bg-yellow-500"
      case "pending":
        return "bg-gray-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado"
      case "in_progress":
        return "En Progreso"
      case "in_review":
        return "En Revisión"
      case "pending":
        return "Pendiente"
      case "cancelled":
        return "Cancelado"
      default:
        return status
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Panel de Administración</h1>
              <p className="text-muted-foreground">VisualCraft - Gestión de Clientes y Proyectos</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configuración
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{clients.length}</div>
              <p className="text-xs text-muted-foreground">+2 este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {projects.filter((p) => p.status !== "completed").length}
              </div>
              <p className="text-xs text-muted-foreground">En progreso</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completados</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                ${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Total proyectos</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Proyectos</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
            <TabsTrigger value="access-requests">Solicitudes de Acceso</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gestión de Proyectos</h2>
              <Dialog open={isCreateProjectOpen} onOpenChange={setIsCreateProjectOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Proyecto
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
                    <DialogDescription>Asigna un nuevo proyecto a un cliente existente</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-client">Cliente</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar cliente" />
                          </SelectTrigger>
                          <SelectContent>
                            {clients.map((client: any) => (
                              <SelectItem key={client.id} value={client.id.toString()}>
                                {client.restaurant} - {client.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-service">Tipo de Servicio</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-profesional">Página Web Profesional</SelectItem>
                            <SelectItem value="menu-digital-qr">Menú Digital QR</SelectItem>
                            <SelectItem value="reservas-online">Reservas Online</SelectItem>
                            <SelectItem value="fidelizacion">Fidelización</SelectItem>
                            <SelectItem value="rastreo-automatizado">Rastreo Automatizado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-title">Título del Proyecto</Label>
                      <Input id="project-title" placeholder="Ej: Página Web Completa - Restaurante XYZ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-description">Descripción</Label>
                      <Textarea id="project-description" placeholder="Describe los detalles del proyecto..." rows={3} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-budget">Presupuesto ($)</Label>
                        <Input id="project-budget" type="number" placeholder="1500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-priority">Prioridad</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Media" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Baja</SelectItem>
                            <SelectItem value="medium">Media</SelectItem>
                            <SelectItem value="high">Alta</SelectItem>
                            <SelectItem value="urgent">Urgente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-deadline">Fecha Límite</Label>
                        <Input id="project-deadline" type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreateProjectOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setIsCreateProjectOpen(false)}>Crear Proyecto</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {projects.map((project: any) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`} />
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{project.title}</CardTitle>
                          <CardDescription>{project.client}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${getPriorityColor(project.priority)} text-white`}>
                          {project.priority}
                        </Badge>
                        <Badge variant="secondary">{getStatusText(project.status)}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Progreso</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {project.progress}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Presupuesto</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">${project.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fecha Límite</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{project.deadline}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gestión de Clientes</h2>
              <Dialog open={isCreateClientOpen} onOpenChange={setIsCreateClientOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Cliente
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Crear Nuevo Cliente</DialogTitle>
                    <DialogDescription>Registra un nuevo cliente y genera sus credenciales de acceso</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="client-name">Nombre Completo</Label>
                        <Input id="client-name" placeholder="José Pérez" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="client-email">Email</Label>
                        <Input id="client-email" type="email" placeholder="jose@restaurante.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-restaurant">Nombre del Restaurante</Label>
                      <Input id="client-restaurant" placeholder="La Parrilla de José" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-phone">Teléfono</Label>
                      <Input id="client-phone" placeholder="+54 9 11 1234-5678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-password">Contraseña Temporal</Label>
                      <Input id="client-password" type="password" placeholder="Contraseña segura" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreateClientOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setIsCreateClientOpen(false)}>Crear Cliente</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {clients.map((client: any) => (
                <Card key={client.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChefHat className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-gray-100">
                            {client.restaurant}
                          </CardTitle>
                          <CardDescription>
                            {client.name} • {client.email}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={client.status === "active" ? "default" : "secondary"}>
                          {client.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Teléfono</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{client.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Proyectos</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{client.projects}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Registrado</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{client.created}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Analíticas y Reportes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">Proyectos por Estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Completados</span>
                      <Badge variant="secondary">1</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">En Progreso</span>
                      <Badge variant="secondary">1</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">En Revisión</span>
                      <Badge variant="secondary">1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">Servicios Más Solicitados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Páginas Web</span>
                      <Badge variant="secondary">40%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Menús Digitales</span>
                      <Badge variant="secondary">30%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Reservas Online</span>
                      <Badge variant="secondary">20%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Otros</span>
                      <Badge variant="secondary">10%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Access Requests Tab */}
          <TabsContent value="access-requests" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Solicitudes de Acceso</h2>
              <Badge variant="secondary">{/* Aquí iría el conteo de solicitudes pendientes */}3 Pendientes</Badge>
            </div>

            <div className="grid gap-4">
              {/* Ejemplo de solicitudes - en producción vendrían de la base de datos */}
              {[
                {
                  id: 1,
                  name: "Carlos Mendoza",
                  email: "carlos@elasador.com",
                  restaurant: "El Asador Criollo",
                  phone: "+54 9 11 5555-6666",
                  message: "Necesito una página web para mi parrilla familiar",
                  status: "pending",
                  created: "2024-03-20",
                },
                {
                  id: 2,
                  name: "María González",
                  email: "maria@pizzaroma.com",
                  restaurant: "Pizza Roma",
                  phone: "+54 9 11 7777-8888",
                  message: "Quiero implementar un menú digital con QR",
                  status: "pending",
                  created: "2024-03-19",
                },
              ].map((request) => (
                <Card key={request.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{request.restaurant}</CardTitle>
                        <CardDescription>
                          {request.name} • {request.email}
                        </CardDescription>
                      </div>
                      <Badge variant={request.status === "pending" ? "secondary" : "default"}>
                        {request.status === "pending" ? "Pendiente" : "Procesada"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Teléfono</p>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">{request.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Fecha</p>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">{request.created}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Estado</p>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {request.status === "pending" ? "Pendiente" : "Procesada"}
                          </p>
                        </div>
                      </div>
                      {request.message && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Mensaje:</p>
                          <p className="text-sm bg-muted/50 p-3 rounded-lg">{request.message}</p>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Aprobar
                        </Button>
                        <Button size="sm" variant="destructive">
                          Rechazar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver Detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
