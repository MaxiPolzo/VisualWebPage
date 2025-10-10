-- Crear tabla para solicitudes de acceso
CREATE TABLE IF NOT EXISTS access_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  restaurant_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  approved_at TIMESTAMP WITH TIME ZONE
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_access_requests_email ON access_requests(email);
CREATE INDEX IF NOT EXISTS idx_access_requests_status ON access_requests(status);
CREATE INDEX IF NOT EXISTS idx_access_requests_created_at ON access_requests(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE access_requests ENABLE ROW LEVEL SECURITY;

-- Política para permitir insertar nuevas solicitudes (público)
CREATE POLICY "Anyone can create access requests" ON access_requests
  FOR INSERT WITH CHECK (true);

-- Política para que solo los administradores puedan ver todas las solicitudes
CREATE POLICY "Only service role can view access requests" ON access_requests
  FOR SELECT USING (auth.role() = 'service_role');

-- Política para que solo los administradores puedan actualizar solicitudes
CREATE POLICY "Only service role can update access requests" ON access_requests
  FOR UPDATE USING (auth.role() = 'service_role');

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at automáticamente
CREATE TRIGGER update_access_requests_updated_at 
  BEFORE UPDATE ON access_requests 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
