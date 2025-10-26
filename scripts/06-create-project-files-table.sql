-- Eliminar tabla si existe
DROP TABLE IF EXISTS project_files CASCADE;

-- Crear tabla de archivos de proyectos
CREATE TABLE project_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT,
  size BIGINT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  uploaded_by UUID REFERENCES users(id)
);

-- Crear índices
CREATE INDEX idx_project_files_project_id ON project_files(project_id);
CREATE INDEX idx_project_files_created_at ON project_files(created_at DESC);

-- Deshabilitar RLS temporalmente
ALTER TABLE project_files DISABLE ROW LEVEL SECURITY;
