-- Eliminar tabla si existe (solo para desarrollo)
DROP TABLE IF EXISTS users CASCADE;

-- Crear tabla de usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'client')),
  name TEXT NOT NULL,
  restaurant_name TEXT,
  phone TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Deshabilitar Row Level Security temporalmente (para desarrollo)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Comentario: En producción, habilitar RLS con políticas apropiadas
