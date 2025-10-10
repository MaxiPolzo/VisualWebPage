# 🎨 VisualCraft Agency - Plataforma Web para Restaurantes

Plataforma completa de gestión de proyectos web para restaurantes, desarrollada con Next.js 14, Supabase y Resend.

![VisualCraft Logo](./public/logo.png)

## ✨ Características

- 🍽️ **Especializado en Restaurantes**: Soluciones digitales adaptadas al sector gastronómico
- 👥 **Panel de Administración**: Gestión completa de clientes y proyectos
- 📊 **Panel de Cliente**: Los clientes pueden ver el progreso de sus proyectos en tiempo real
- 🔐 **Autenticación Segura**: Sistema de login con JWT
- 📧 **Notificaciones por Email**: Integración con Resend para envío de emails
- 🎫 **Sistema de Tickets**: Solicitud de servicios mediante sistema de tickets
- 🌐 **Multilingüe**: Preparado para múltiples idiomas
- 📱 **Responsive**: Diseño adaptado a todos los dispositivos

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: JWT + bcrypt
- **Emails**: Resend
- **Estilos**: Tailwind CSS + shadcn/ui
- **Lenguaje**: TypeScript
- **Deploy**: Vercel

## 📋 Requisitos Previos

- Node.js 18+ o Bun
- Cuenta en Supabase (gratis)
- Cuenta en Resend (gratis para 3,000 emails/mes)
- Cuenta en GitHub
- Cuenta en Vercel

## 🛠️ Instalación Local

1. **Clona el repositorio**
   \`\`\`bash
   git clone https://github.com/tu-usuario/visualcraft-website.git
   cd visualcraft-website
   \`\`\`

2. **Instala las dependencias**
   \`\`\`bash
   npm install
   # o
   bun install
   \`\`\`

3. **Configura las variables de entorno**
   
   Crea un archivo `.env.local` con estas variables:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
   JWT_SECRET=tu_jwt_secret_muy_seguro
   RESEND_API_KEY=tu_resend_api_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   \`\`\`

4. **Ejecuta los scripts SQL en Supabase**
   
   Ve a Supabase SQL Editor y ejecuta los scripts en orden:
   - `scripts/01-create-users-table.sql`
   - `scripts/02-insert-test-users.sql`
   - `scripts/03-create-access-requests-table.sql`
   - `scripts/04-create-projects-table.sql`
   - `scripts/05-create-project-updates-table.sql`
   - `scripts/06-create-project-files-table.sql`

5. **Inicia el servidor de desarrollo**
   \`\`\`bash
   npm run dev
   # o
   bun dev
   \`\`\`

6. **Abre** [http://localhost:3000](http://localhost:3000)

## 🔑 Credenciales de Prueba

**Admin:**
- Email: `infovisualcraftag@gmail.com`
- Contraseña: `VISUALVISUALVISUAL`

**Cliente:**
- Email: `prueba1@gmail.com`
- Contraseña: `VISUALVISUALVISUAL`

## 🚀 Deploy en Vercel

Este proyecto está optimizado para deploy en Vercel. Sigue estos pasos:

1. **Conecta tu repositorio de GitHub con Vercel**
2. **Configura las variables de entorno** en Vercel (Settings → Environment Variables)
3. **Deploy automático** se activará con cada push a `main`

## 📁 Estructura del Proyecto

\`\`\`
visualcraft-website/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── admin/             # Panel de administración
│   ├── cliente/           # Panel de cliente
│   ├── login/             # Página de login
│   └── solicitar-acceso/  # Solicitud de acceso
├── components/            # Componentes React
│   ├── ui/               # Componentes de shadcn/ui
│   └── ...               # Componentes personalizados
├── lib/                   # Utilidades y helpers
│   ├── supabase.ts       # Cliente de Supabase
│   ├── auth.ts           # Autenticación
│   ├── email-service.ts  # Servicio de emails
│   └── ...
├── public/               # Archivos estáticos
│   ├── logo.png          # Logo de VisualCraft
│   └── images/           # Imágenes
└── scripts/              # Scripts SQL para Supabase
\`\`\`

## 🎨 Personalización

### Colores

Los colores están basados en el logo de VisualCraft (#5B47E5). Para personalizarlos:

1. Edita `tailwind.config.ts` → sección `visualcraft`
2. Modifica `app/globals.css` → variables CSS

### Contenido

- **Hero**: `components/hero-section.tsx`
- **Servicios**: `components/services-section.tsx`
- **Tickets**: `components/tickets-section.tsx`
- **About**: `components/about-section.tsx`

## 📧 Configuración de Emails

### Desarrollo
Los emails se envían desde `onboarding@resend.dev`

### Producción
1. Ve a Resend → Domains
2. Añade y verifica tu dominio
3. Actualiza `lib/email-service.ts`:
   \`\`\`typescript
   from: "VisualCraft <noreply@tudominio.com>"
   \`\`\`

## 🔒 Seguridad

- ✅ Autenticación JWT
- ✅ Contraseñas hasheadas con bcrypt
- ✅ Variables de entorno para datos sensibles
- ✅ HTTPS en producción
- ✅ httpOnly cookies
- ⚠️ RLS deshabilitado (habilitar en producción)

## 🐛 Solución de Problemas

### Error: "supabaseUrl is required"
- Verifica que las variables de entorno estén configuradas
- En Vercel, asegúrate de hacer redeploy después de añadir variables

### Los emails no llegan
- Verifica el API Key de Resend
- En desarrollo, añade el email a la lista de prueba en Resend
- Verifica que el dominio esté verificado (producción)

### Error de autenticación
- Verifica que los scripts SQL se hayan ejecutado
- Comprueba que los usuarios de prueba existan en la tabla `users`

## 📝 Licencia

Este proyecto es privado y pertenece a VisualCraft Agency.

## 👥 Contacto

- **Email**: infovisualcraftag@gmail.com
- **Website**: [visualcraft.agency](https://visualcraft.agency)

## 🎯 Roadmap

- [ ] Implementar sistema de pagos
- [ ] Añadir chat en tiempo real
- [ ] Sistema de notificaciones push
- [ ] App móvil React Native
- [ ] Dashboard de analytics
- [ ] Sistema de facturas
- [ ] Integración con Google Calendar
- [ ] Multi-idioma completo

---

Hecho con 💜 por VisualCraft Agency
