"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FolderOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  ChefHat,
  MessageSquare,
  Download,
  ExternalLink,
  Calendar,
  DollarSign,
} from "lucide-react"

export default function ClientDashboard() {
  const [projects, setProjects] = useState([])
  const [updates, setUpdates] = useState([])

  // Datos de ejemplo para el cliente (en producción vendrían de la base de datos)
  const clientInfo = {
    name: "José Pérez",
    restaurant: "La Parrilla de Pepe",
    email: "pepe@laparrilla.com",
    phone: "+54 9 11 1234-5678",
  }

  const exampleProjects = [
    {
      id: 1,
      title: "Página Web Completa",
      service: "web-profesional",
      status: "completed",
      progress: 100,
      budget: 1500,
      created: "2024-01-20",
      deadline: "2024-02-20",
      description: "Sitio web completo con menú digital, reservas online y galería de platos",
      deliverables: [
        { name: "Sitio Web Principal", url: "https://laparrilladepepe.com", type: "website" },
        { name: "Manual de Usuario", url: "#", type: "pdf" },
        { name: "Credenciales de Acceso", url: "#", type: "document" },
      ],
    },
    {
      id: 2,
      title: "Menú Digital QR",
      service: "menu-digital-qr",
      status: "in_progress",
      progress: 75,
      budget: 800,
      created: "2024-03-01",
      deadline: "2024-03-30",
      description: "Menú digital interactivo con código QR para mesas",
      deliverables: [
        { name: "Vista Previa del Menú", url: "#", type: "website" },
        { name: "Códigos QR para Imprimir", url: "#", type: "pdf" },
      ],
    },
  ]

  const exampleUpdates = [
    {
      id: 1,
      projectId: 1,
      title: "Proyecto Completado",
      description:
        "Su sitio web está online y funcionando perfectamente. Se han realizado todas las optimizaciones SEO solicitadas.",
      date: "2024-02-20",
      type: "success",
    },
    {
      id: 2,
      projectId: 2,
      title: "Progreso del Menú Digital",
      description: "El diseño del menú está casi terminado. Estamos ajustando los últimos detalles de la interfaz.",
      date: "2024-03-15",
      type: "info",
    },
    {
      id: 3,
      projectId: 2,
      title: "Revisión Requerida",
      description:
        "Por favor, revise la vista previa del menú y confirme si los colores y tipografía son de su agrado.",
      date: "2024-03-18",
      type: "warning",
    },
  ]

  useEffect(() => {
    setProjects(exampleProjects)
    setUpdates(exampleUpdates)
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
      default:
        return status
    }
  }

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case "info":
        return <Clock className="w-5 h-5 text-blue-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{clientInfo.restaurant}</h1>
              <p className="text-muted-foreground">Panel de Cliente - {clientInfo.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contactar Soporte
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {projects.filter((p: any) => p.status !== "completed").length}
              </div>
              <p className="text-xs text-muted-foreground">En desarrollo</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completados</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {projects.filter((p: any) => p.status === "completed").length}
              </div>
              <p className="text-xs text-muted-foreground">Proyectos finalizados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inversión Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                ${projects.reduce((sum: number, p: any) => sum + p.budget, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">En proyectos</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próxima Entrega</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">15</div>
              <p className="text-xs text-muted-foreground">Días restantes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Mis Proyectos</TabsTrigger>
            <TabsTrigger value="updates">Actualizaciones</TabsTrigger>
            <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid gap-6">
              {projects.map((project: any) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`} />
                        <div>
                          <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{getStatusText(project.status)}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Progreso del Proyecto
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {project.progress}%
                        </span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Presupuesto</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">${project.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fecha de Inicio</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{project.created}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fecha de Entrega</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">{project.deadline}</p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    {project.deliverables && project.deliverables.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Entregables</h4>
                        <div className="grid gap-2">
                          {project.deliverables.map((deliverable: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                {deliverable.type === "website" && <ExternalLink className="w-4 h-4 text-primary" />}
                                {deliverable.type === "pdf" && <Download className="w-4 h-4 text-primary" />}
                                {deliverable.type === "document" && <Download className="w-4 h-4 text-primary" />}
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                  {deliverable.name}
                                </span>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <a href={deliverable.url} target="_blank" rel="noopener noreferrer">
                                  {deliverable.type === "website" ? "Visitar" : "Descargar"}
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Actualizaciones de Proyectos</h2>
            <div className="space-y-4">
              {updates.map((update: any) => (
                <Card key={update.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {getUpdateIcon(update.type)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">{update.title}</h3>
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                        <p className="text-muted-foreground">{update.description}</p>
                        <div className="mt-2">
                          <Badge variant="outline" className="text-xs">
                            Proyecto: {projects.find((p: any) => p.id === update.projectId)?.title}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mi Perfil</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">Información del Restaurante</CardTitle>
                <CardDescription>Datos de contacto y configuración de la cuenta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nombre del Restaurante</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{clientInfo.restaurant}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Propietario</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{clientInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{clientInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{clientInfo.phone}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline">Editar Perfil</Button>
                    <Button variant="outline">Cambiar Contraseña</Button>
                    <Button variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contactar Soporte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
