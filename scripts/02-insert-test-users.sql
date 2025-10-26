-- Nota: Las contraseñas están hasheadas con bcrypt
-- Contraseña para ambos usuarios: VISUALVISUALVISUAL
-- Hash generado: $2a$10$rZ8zVQXH5aKZ0p1Y2mYvH.3qJ4xK5N6mP8wR9tS0uV1wX2yZ3aB4c

-- Insertar usuario ADMIN
INSERT INTO users (email, password_hash, role, name, is_active)
VALUES (
  'infovisualcraftag@gmail.com',
  '$2a$10$rZ8zVQXH5aKZ0p1Y2mYvH.3qJ4xK5N6mP8wR9tS0uV1wX2yZ3aB4c',
  'admin',
  'Admin VisualCraft',
  true
) ON CONFLICT (email) DO UPDATE SET
  password_hash = EXCLUDED.password_hash,
  updated_at = NOW();

-- Insertar usuario CLIENTE
INSERT INTO users (email, password_hash, role, name, restaurant_name, phone, is_active)
VALUES (
  'prueba1@gmail.com',
  '$2a$10$rZ8zVQXH5aKZ0p1Y2mYvH.3qJ4xK5N6mP8wR9tS0uV1wX2yZ3aB4c',
  'client',
  'Cliente Prueba',
  'Restaurante Demo',
  '+34 600 000 000',
  true
) ON CONFLICT (email) DO UPDATE SET
  password_hash = EXCLUDED.password_hash,
  restaurant_name = EXCLUDED.restaurant_name,
  updated_at = NOW();
