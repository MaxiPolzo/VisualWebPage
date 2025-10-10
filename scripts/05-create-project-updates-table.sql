-- Eliminar tabla si existe
DROP TABLE IF EXISTS project_updates CASCADE;

-- Crear tabla de actualizaciones de proyectos
CREATE TABLE project_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES users(id)
);

-- Crear índices
CREATE INDEX idx_project_updates_project_id ON project_updates(project_id);
CREATE INDEX idx_project_updates_created_at ON project_updates(created_at DESC);

-- Deshabilitar RLS temporalmente
ALTER TABLE project_updates DISABLE ROW LEVEL SECURITY;
