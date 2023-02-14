---
sidebar_position: 3
---

# Merging

Una vez ya sabemos como organizarnos y trabajar en las diferentes ramas necesitamos saber cómo integrar el trabajo de cada uno en una sola rama. Aquí es donde utilizamos el **merging**, esto fusionará los cambios que se han hecho en una rama en otra rama.

Para mayor información sobre las fusiones puedes revisar la documentación que se encuentra en **[Github](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)**.

## Estrategia de Merging: Merge Commit

### Merge con avance rápido (fast-forward)

Se presenta cuando por ejemplo tenemos nuestra rama **dev** y agregamos cambios por medio de las subramas **feature** en esta rama. Luego cuando vamos a hacer el merge de la rama **dev** a **main**, si **main** permanece sin ningún cambio, se producirá un avance rápido. Solo se añadiran los nuevos cambios (_commits_) presentes en la rama **dev** y no se generará ningún commit adicional.

### Merge de tres vías (3-way)

Siguiendo el ejemplo anterior. Imaginemos que existen nuevos _commits_ en **main** al momento de querer hacer el merge de la rama **dev**, git se encarga de hacer la unión y se va a ver reflejado en un nuevo commit que por defecto tiene como mensaje similar a "Merge branch 'desarrollo'".

### Merge con conflictos

Cuando se presenta un merge con conflictos por resolver, siempre se crea un nuevo commit que representa la solución de los conflictos.

:::note Nota
Si bien es importante saber esta información del **merging** no es fundamental para los desarrolladores entrar en detalle, ya que **NO** se encargan del merging, es función **exclusivamente** del rol de infraestructura.
:::
