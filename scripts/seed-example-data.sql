-- Insertar clientes de ejemplo
INSERT INTO users (email, password_hash, role, name, restaurant_name, phone) VALUES
('pepe@laparrilla.com', '$2b$10$example_hash_here', 'client', 'José Pérez', 'La Parrilla de Pepe', '+54 9 11 1234-5678'),
('mario@pizzeria.com', '$2b$10$example_hash_here', 'client', 'Mario Rossi', 'Pizzería Don Mario', '+54 9 11 2345-6789'),
('ana@cafecentral.com', '$2b$10$example_hash_here', 'client', 'Ana García', 'Café Central', '+54 9 11 3456-7890'),
('carlos@sushizen.com', '$2b$10$example_hash_here', 'client', 'Carlos Tanaka', 'Sushi Zen', '+54 9 11 4567-8901')
ON CONFLICT (email) DO NOTHING;

-- Insertar proyectos de ejemplo
INSERT INTO projects (client_id, title, description, service_type, status, priority, budget, notes) VALUES
(
    (SELECT id FROM users WHERE email = 'pepe@laparrilla.com'),
    'Página Web Completa - La Parrilla de Pepe',
    'Desarrollo de sitio web completo con menú digital, reservas online y galería de platos',
    'web-profesional',
    'completed',
    'high',
    1500.00,
    'Cliente muy satisfecho con el resultado. Incluye SEO optimizado.'
),
(
    (SELECT id FROM users WHERE email = 'mario@pizzeria.com'),
    'Menú Digital QR - Pizzería Don Mario',
    'Menú digital interactivo con código QR y personalización de pizzas',
    'menu-digital-qr',
    'in_progress',
    'medium',
    800.00,
    'En proceso de revisión final. Cliente solicita ajustes en colores.'
),
(
    (SELECT id FROM users WHERE email = 'ana@cafecentral.com'),
    'Sistema de Reservas - Café Central',
    'Sistema completo de reservas online con confirmación por WhatsApp',
    'reservas-online',
    'in_review',
    'medium',
    1200.00,
    'Sistema funcionando correctamente. Pendiente de aprobación final del cliente.'
),
(
    (SELECT id FROM users WHERE email = 'carlos@sushizen.com'),
    'Programa de Fidelización - Sushi Zen',
    'Sistema de puntos y cupones digitales con promociones automáticas',
    'fidelizacion',
    'pending',
    'low',
    900.00,
    'Proyecto en cola. Cliente quiere comenzar el próximo mes.'
);

-- Insertar actualizaciones de proyectos
INSERT INTO project_updates (project_id, admin_id, title, description, status_change) VALUES
(
    (SELECT id FROM projects WHERE title LIKE '%La Parrilla de Pepe%'),
    (SELECT id FROM users WHERE email = 'admin@visualcraft.com'),
    'Proyecto Completado',
    'El sitio web ha sido completado y está online. Se realizaron todas las optimizaciones SEO solicitadas.',
    'completed'
),
(
    (SELECT id FROM projects WHERE title LIKE '%Pizzería Don Mario%'),
    (SELECT id FROM users WHERE email = 'admin@visualcraft.com'),
    'Revisión de Colores',
    'Se están ajustando los colores del menú según las preferencias del cliente. Entrega estimada para mañana.',
    'in_progress'
),
(
    (SELECT id FROM projects WHERE title LIKE '%Café Central%'),
    (SELECT id FROM users WHERE email = 'admin@visualcraft.com'),
    'Sistema en Revisión',
    'El sistema de reservas está funcionando correctamente. Esperando feedback final del cliente.',
    'in_review'
);
