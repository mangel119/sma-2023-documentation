---
sidebar_position: 1
---

# Actualizaciones
Las siguientes dependencias se actualizaron:
- Next 13.3
- React 18.2

Para obtener estas versiones deben estar en la **rama dev** y ejecutar el comando `npm install`

:::danger Error en Windows
En next 13.3 actualmente hay un problema al ejecutar el comando `npm run dev` en Windows. Este problema no ocurre en Linux o Mac.

Si les sale el siguiente error al intentar cargar la página `SyntaxError: Unexpected token u in JSON at position 0` realizar los siguientes pasos para solucionarlo.
1. Detener el comando `npm run dev`
2. Ir al archivo ubicado en `node_modules\next\dist\build\webpack\loaders\next-flight-loader\index.js`
3. Reemplazar la línea `const proxy = createProxy("${this.resourcePath}")` por ```const proxy = createProxy(String.raw\`${this.resourcePath}\`)```
4. Eliminar la carpeta `.next` del proyecto
5. Volver a ejecutar el comando `npm run dev`

Con esto ya debe ejecutar sin problemas el proyecto en Windows, para más información de este error pueden seguir este issue en Github https://github.com/vercel/next.js/issues/47704
:::
