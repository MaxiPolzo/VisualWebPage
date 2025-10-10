# 🚀 Configuración de VisualCraft Website

## 📋 Requisitos Previos

- Node.js 18+ o Bun
- Cuenta en Supabase (gratis)
- Cuenta en Resend (gratis para 3,000 emails/mes)

## 🔧 Configuración Paso a Paso

### 1. Variables de Entorno

Las variables de entorno ya están configuradas en `.env.local` con tus claves:

✅ Supabase URL
✅ Supabase Anon Key
✅ Supabase Service Role Key
✅ JWT Secret (generado aleatoriamente)
✅ Resend API Key

### 2. Configurar Base de Datos en Supabase

1. **Ve a tu proyecto en Supabase**: https://jcapkqiroiymamgqswra.supabase.co

2. **Abre el SQL Editor**

3. **Ejecuta los scripts en orden** (están en la carpeta `scripts/`):
   - `01-create-users-table.sql`
   - `02-insert-test-users.sql`
   - `03-create-access-requests-table.sql`
   - `04-create-projects-table.sql`
   - `05-create-project-updates-table.sql`
   - `06-create-project-files-table.sql`

### 3. Instalar Dependencias

\`\`\`bash
npm install
# o
bun install
\`\`\`

### 4. Ejecutar en Desarrollo

\`\`\`bash
npm run dev
# o
bun dev
\`\`\`

La aplicación estará disponible en: http://localhost:3000

### 5. Probar Login

Ve a http://localhost:3000/login y usa estas credenciales:

**Admin:**
- Email: `infovisualcraftag@gmail.com`
- Contraseña: `VISUALVISUALVISUAL`

**Cliente:**
- Email: `prueba1@gmail.com`
- Contraseña: `VISUALVISUALVISUAL`

## 🚀 Deploy a Vercel

### 1. Conecta tu Repositorio

\`\`\`bash
vercel
\`\`\`

### 2. Configura Variables de Entorno en Vercel

Ve a tu proyecto en Vercel → Settings → Environment Variables

Añade todas las variables de `.env.local`:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://jcapkqiroiymamgqswra.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
JWT_SECRET=8f9a2b3c...
RESEND_API_KEY=re_38a8PREZ...
NEXT_PUBLIC_APP_URL=https://tu-proyecto.vercel.app
\`\`\`

⚠️ **IMPORTANTE**: Actualiza `NEXT_PUBLIC_APP_URL` con tu URL de Vercel real.

### 3. Deploy

\`\`\`bash
vercel --prod
\`\`\`

## 📧 Configurar Resend (Emails)

### Para Desarrollo
- Los emails se envían desde `onboarding@resend.dev`
- Solo llegarán a emails que añadas en tu lista de prueba en Resend

### Para Producción (Recomendado)
1. Ve a Resend → Domains
2. Añade tu dominio (ej: visualcraft.com)
3. Configura los registros DNS que te indiquen
4. Una vez verificado, actualiza el email en `lib/email-service.ts`:
   \`\`\`typescript
   from: "VisualCraft <noreply@tudominio.com>"
   \`\`\`

## ✅ Checklist de Verificación

- [ ] Variables de entorno configuradas
- [ ] Scripts SQL ejecutados en Supabase
- [ ] Aplicación corriendo en local
- [ ] Login funciona con usuarios de prueba
- [ ] Variables configuradas en Vercel
- [ ] Deploy exitoso en Vercel
- [ ] (Opcional) Dominio verificado en Resend

## 🎨 Personalización

### Colores
Los colores están basados en el logo de VisualCraft (#5B47E5).
Para cambiarlos, edita `tailwind.config.ts` → `visualcraft`

### Logo
El logo está en `/public/logo.png`

### Contenido
- Hero: `components/hero-section.tsx`
- Servicios: `components/services-section.tsx`
- Tickets: `components/tickets-section.tsx`

## 🐛 Problemas Comunes

### "supabaseUrl is required"
- Verifica que las variables de entorno estén configuradas en Vercel
- Asegúrate de haber hecho redeploy después de añadir las variables

### Emails no llegan
- Verifica que el API Key de Resend sea correcto
- Comprueba que el email esté en tu lista de prueba (en desarrollo)
- Verifica el dominio si estás en producción

### Error de autenticación
- Verifica que los scripts SQL se hayan ejecutado correctamente
- Comprueba que los usuarios de prueba existan en la tabla `users`

## 📚 Documentación

- [Next.js](https://nextjs.org/docs)
- [Supabase](https://supabase.com/docs)
- [Resend](https://resend.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Soporte

Si necesitas ayuda, contáctame o abre un issue en el repositorio.
