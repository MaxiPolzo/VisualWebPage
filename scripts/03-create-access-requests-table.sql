-- Eliminar tabla si existe
DROP TABLE IF EXISTS access_requests CASCADE;

-- Crear tabla de solicitudes de acceso
CREATE TABLE access_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  restaurant_name TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by UUID REFERENCES users(id)
);

-- Crear índices
CREATE INDEX idx_access_requests_status ON access_requests(status);
CREATE INDEX idx_access_requests_email ON access_requests(email);
CREATE INDEX idx_access_requests_created_at ON access_requests(created_at DESC);

-- Deshabilitar RLS temporalmente
ALTER TABLE access_requests DISABLE ROW LEVEL SECURITY;
