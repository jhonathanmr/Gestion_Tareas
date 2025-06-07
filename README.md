# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Gestión de Tareas

Este proyecto es una aplicación web sencilla para gestionar tareas. Permite agregar, editar, eliminar y buscar tareas. Cada tarea tiene título, categoría, descripción, fecha y un responsable asignado.

La lista de responsables se obtiene desde una API pública, por lo que puedes seleccionar responsables reales para cada tarea.


## Tecnologías usadas

- React (con Vite)
- JavaScript (React Hooks: useState, useEffect)
- Fetch API para consumir datos externos
- CSS para estilos


## Características

- Crear nuevas tareas.
- Editar tareas existentes.
- Eliminar tareas.
- Filtrar tareas por título, categoría.
- Seleccionar responsable de tarea desde lista obtenida por API.
- Estado de carga y manejo de errores al obtener responsables.


## API pública utilizada

- Usuarios desde [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

Esta API simula datos de usuarios que usamos para asignar responsables a las tareas.


## Cómo ejecutar el proyecto

1. Clonar este repositorio:
[--link--](https://github.com/jhonathanmr/Gestion_Tareas/tree/main)

2. Entrar a la carpeta del proyecto:

3. Instalar las dependencias:

npm install

4. Ejecutar el proyecto en modo desarrollo:

npm run dev

5. Abrir en el navegador la dirección que muestra la consola (normalmente http://localhost:3000)


## Video de presentación

(https://drive.google.com/file/d/1R3tzCRH7GkTdYWk0uc983NTVwqxqnrox/view?usp=sharing)


## Autor

Jhonathan Montaño Ruiz - jhonathanm2011@gmail.com


Gracias por revisar este proyecto.
