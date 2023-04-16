---
sidebar_position: 4
---
# Sistema de Login
Se implementó el sistema de Login y Autenticación de usuario usando el Servicio de Supabase.
Esto permite conectar a los usuarios registrados con la información de la base de datos.

Las rutas se encuentras protegidas.
Esto quiere decir que si un usuario intenta acceder a la plataforma sin haber inciado sesión no se le permitirá
y lo redireccionará a la página de login.
Lo mismo sucede si un usuario *profesor* intenta acceder a la plataforma de estudiante lo devolverá a su plataforma de profesor.
Con el usuario *estudiante* sucede lo mismo si intenta acceder a la plataforma de profesor.
## Credenciales
Los desarrolladores backend son los encargados de crear usuarios.
Sin embargo desde infraestructura se crearon estos usuarios de prueba para poder seguir con el desarrollo.

### profesor
**email** supero@profesor.com
**contraseña** profesor123
### estudiante
**email** estudiante@estudiante.com
**contraseña** estudiante123

## Crear usuarios
El proceso de creación de usuarios consta de dos partes para poder funcionar correctamente.
### 1. Registro de usuarios en Auth

### 2. Creación de la información del Usuario
