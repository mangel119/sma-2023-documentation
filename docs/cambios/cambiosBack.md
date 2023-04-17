---
sidebar_position: 3
---
# Cambios en el Back End
En Next 13.2 se realizó un cambio muy importante en el manejo de las API, esto con el fin de ir dejando atrás la carpeta Pages. Todas las API se manejarán en la carpeta App junto con el Front End.

## Route Handlers
Anteriormente conocidas como API Routes.
Estos [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers) permiten crear controladores de solicitudes personalizados para una ruta determinada utilizando las API de respuesta y solicitud web.

La documentación oficial de Next es bastante completa y deben leerla para utilizar las nuevas API. https://beta.nextjs.org/docs/routing/route-handlers

Estas nuevas API Handlers permiten también APIs dinámicas dentro de las rutas dinámicas.
Por ejemplo, traer la información del curso en el que se encuentra el usuario.

## route.ts
Las nuevas API funcionan igual que las páginas en Next13. Y al igual que estas son rutas que incluso pueden ser accedidas a través del navegador.

Este archivo route.ts funciona como **endpoint** para nuestras API. 

Se maneja de una manera diferente a cómo estaba antes con el request.method y los condicionales dependiendo del tipo de método.
Esta nueva manera se maneja a través de async functions que son los request handlers.

Pueden encontrar cómo integrar estos request handlers al proyecto e información adicional en la documentación oficial de Next https://beta.nextjs.org/docs/api-reference/file-conventions/route

## Cambios en las API
Con esta nueva manera dinámica de crear las API se revisaron y modificaron algunas.
Estos han sido los cambios hasta ahora, en un futuro habrán y se estará hablando con los diferentes back para la migración.

1. course/posts/activities -> Pendiente (Ruta Dinámica del curso)
2. course/posts/publications -> Pendiente (Ruta Dinámica del curso)
3. course/courseParticipant -> Pendiente (Ruta Dinámica del curso)
4. course/courses -> app/api/course (GET y POST) | Pendiente (DELETE y PATCH Ruta Dinámica del Curso)
5. course/coursesById -> Pendiente (Ruta Dinámica del curso)
6. course/getCourseParticipant -> Eliminada (Repetida con la 3)

7. crud/crudChat -> ?
8. crud/crudMessage -> ?
9. crud/crudParticipantChat -> ?
10. crud/messagesFiles -> ?

11. mainClasses/AgregarNM -> Eliminada (Repetida con 25, No estamos usando Prisma, No fue aprobado)
12. mainClasses/ChatM -> ?
13. mainClasses/Course -> ?
14. mainClasses/hello -> Eliminada
15. mainClasses/ia -> Pendiente
16. mainClasses/iaMessage -> ?
17. mainClasses/materiales -> Eliminada (Repetida con 25, No estamos usando Prisma, No fue aprobado)
18. mainClasses/messageM -> ?
19. mainClasses/Participant -> ?
20. mainClasses/student -> ?
21. mainClasses/teacher -> ?

22. student/iaMessage -> ?
23. student/studentCourse -> Eliminada (Repetida con la 3)

24. teacher/MyCourses -> Eliminada (Repetida con la 3)
25. teacher/postfiles -> Pendiente (Post)
