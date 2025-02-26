# Informe de testing

Proyecto asignado: [[Github m4c-quagliata-fernandez-minelli](https://github.com/IngSoft-FIS-2024-2/proyecto-m4c-quagliata-fernandez-minelli)]

## Test de sistema

### Diseño de casos de prueba

### Casos de prueba caja negra:

**Particion de equivalencias:**

- **Planificación Semanal**

  | Entrada / Variable | Clases válidas | Clases inválidas |
  | :----------------- | :------------- | :--------------- |
  | Competencia        | todas(1)       | \-               |
  | Espacio            | todas(2)       | \-               |
  | Unidad             | todas(3)       | \-               |
  | Meta               | todas(4)       | \-               |
  | Contenido          | todas(5)       | \-               |
  | Actividad          | todas(6)       | \-               |
  | Observaciones      | todas(7)       | \-               |

  | Casos de prueba | Competencia               | Espacio              | Unidad              | Meta               | Contenido               | Actividad              | Observaciones           | Resultado esperado                                               | Clases de equivalencia cubiertas |
  | :-------------- | :------------------------ | :------------------- | :------------------ | :----------------- | :---------------------- | :--------------------- | :---------------------- | :--------------------------------------------------------------- | :------------------------------- |
  | CP1             | “una competencia”(válido) | “un espacio”(válido) | “un unidad”(valido) | “una meta”(válido) | “una contenido”(válido) | “una actividad(válido) | “observaciones"(válido) | “Planificación de \_\_\_\_ agregada/actualizada correctamente\!” | 1,2,3,4,5,6,7                    |
  | CP2             | “”(válido)                | “”(válido)           | “”(válido)          | “”(válido)         | “”(válido)              | “”(válido)             | “”(válido)              | “Planificación de \_\_\_\_ agregada/actualizada correctamente\!” | 1,2,3,4,5,6,7                    |

  Para esta seccion, el equipo de desarrollo no especifico ninguna restriccion por lo tanto probamos con todos los valores completados y con todos los valores vacios.

---

- **Agregar curso**

  | Entrada / Variable    | Clases válidas               | Clases inválidas                                |
  | :-------------------- | :--------------------------- | :---------------------------------------------- |
  | Nombre del curso      | nombre no registrado **(1)** | nombre registrado **(3)**, nombre vacío **(4)** |
  | Descripción del curso | descripción no vacío **(2)** | descripción vacío **(5)**                       |

  ***

  | Casos de prueba | Nombre del curso                  | Descripción del curso         | Resultado esperado                                                  | Clases de equivalencia cubiertas |
  | :-------------- | :-------------------------------- | :---------------------------- | :------------------------------------------------------------------ | :------------------------------- |
  | CP1             | “m4e” **(valido)**                | “grupo matutino” **(valido)** | Mensaje: m4e agregado correctamente\!                               | 1, 2                             |
  | CP2             | “m3e” **(valido)**                | “” **(invalido)**             | Mensaje: Por favor, complete todos los campos.                      | 1, 5                             |
  | CP3             | “” **(invalido)**                 | “grupo matutino” **(valido)** | Mensaje: Por favor, complete todos los campos.                      | 2,4                              |
  | CP4             | “curso registrado” **(invalido)** | “grupo nocturno” **(valido)** | Mensaje: Error: No se pudo agregar. registrado ya está en la lista. | 2,3                              |

  ***

- **Análisis de valores límites:**
  No existen numeros límites ni validaciones de largo de strings en este proyecto. Aunque lo recomendamos implementar.

### Definición de ambientes de testing y ejecución de casos

- **Software**:
  - Sistema Operativo: Windows 10 Pro
  - Navegador: Opera GX última versión estable (114.0.5282.222)
- **Configuración Específica**:
  - Resolución de pantalla: 1920x1080

#### **Ejecución de Casos de Prueba**

| ID Caso de Prueba | Descripción                                      | Datos de Entrada                                                                                                                                                                                                                                                                                                                                                             | Resultado Esperado                                                        | Resultado Real                                                            | Estado    | Observaciones                                                                                                                                         |
| ----------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| CP-01             | Agregar curso no registrado                      | Nombre del curso: curso <br>Descripción del curso: descripción                                                                                                                                                                                                                                                                                                               | Registra el curso en el sistema                                           | Registra el curso en el sistema                                           | Aprobado  | Ninguna                                                                                                                                               |
| CP-02             | Agregar curso registrado                         | Nombre del curso: curso<br> Descripción del curso: descripción                                                                                                                                                                                                                                                                                                               | Muestra error de validación de nombre                                     | Muestra error de validación de nombre                                     | Aprobado  | Ninguna                                                                                                                                               |
| CP-03             | Agregar curso sin descripción                    | Nombre del curso: curso<br> Descripción del curso: “”                                                                                                                                                                                                                                                                                                                        | Muestra error de campo requerido                                          | Muestra error de campo requerido                                          | Aprobado  | Ninguna                                                                                                                                               |
| CP-04             | Se agregan cursos a la lista de cursos           | Nombre del curso: curso<br> Descripción del curso: descripción                                                                                                                                                                                                                                                                                                               | Se agrega a la lista de grupos                                            | Se agrega a la lista de grupos                                            | Aprobado  | Ninguna                                                                                                                                               |
| CP-05             | Agregar planificación vacía                      | Competencia: ""<br> Espacio: ""<br> Unidad: "" <br>Meta: "" <br>Contenido: "" <br>Actividad: "" <br>Observaciones: ""                                                                                                                                                                                                                                                        | No se agrega ninguna planificación                                        | Se agrega una planificación con los datos vacios                          | Rechazado | Ninguna                                                                                                                                               |
| CP-06             | Agregar planificación con datos                  | Competencia: "una competencia" <br>Espacio: "un espacio" <br>Unidad: "una unidad" <br>Meta: "una meta" <br>Contenido: "un contenido" <br>Actividad: "una actividad" <br>Observaciones: "observaciones"                                                                                                                                                                       | Se agrega planificación con esos datos                                    | Se agrega planificación con esos datos                                    | Aprobado  | Ninguna                                                                                                                                               |
| CP-07             | Seleccionar otro curso para ver su planificación | Nombre del curso: curso 1<br> Descripción del curso: descripción<br> Nombre del curso: curso 2 <br> Descripción del curso: descripción<br> Planificación de curso 1 : Competencia: "una competencia"<br> Espacio: "un espacio"<br> Unidad: "una unidad"<br> Meta: "una meta" <br>Contenido: "un contenido"<br> Actividad: "una actividad" <br>Observaciones: "observaciones" | Al seleccionar curso 2 no se ven los datos de la planificacion de curso 1 | Al seleccionar curso 2 no se ven los datos de la planificacion de curso 1 | Aprobado  | Ninguna                                                                                                                                               |
| CP-08             | Agregar evento a calendario                      | “”                                                                                                                                                                                                                                                                                                                                                                           | Agregar un evento vacío al calendario                                     | No sucede nada                                                            | Rechazado | No se puede seleccionar el día para agregar un evento, tampoco se pueden agregar datos. Únicamente está el botón de agregar evento sin funcionalidad. |

### Sesiones de pruebas exploratorias

**TESTING EXPLORATORIO 1**

| MISIÓN                 | Encontrar Defectos en el Registro de cursos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INICIO                 | 30/11/2024 \- 9:20 am                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TESTER                 | Valentina Velazquez                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ESTRUCTURA DE DIVISIÓN | **DURACIÓN:** Corta (30v´)<br>**DISEÑO Y EJECUCIÓN DE PRUEBAS:** 60%<br>**INVESTIGACIÓN Y REPORTES DE DEFECTOS: 30**%<br>**ARMADO DE LA SESIÓN:** 10%<br>**OBJETIVO vs. OPORTUNIDAD:** 60 / 40                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| SET UP                 | Navegador: Opera GX, Sistema Operativo: Windows 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ARCHIVOS DE DATOS      | **\#1** <br> Nombre del curso: Grupo test<br> Descripción del curso: Un grupo <br> **\#2** <br>Nombre del curso: Curso 1 <br>Descripción del curso: Descripción <br>Nombre del curso: Curso 2 <br>Descripción del curso: Descripción<br> Nombre del curso: Curso 3 <br>Descripción del curso: Descripción<br> Nombre del curso: Curso 4<br> Descripción del curso: Descripción<br> **\#3** --- <br>**\#4** <br>Nombre del curso: Curso registrado <br>Descripción del curso: descripción 1 <br>Nombre del curso: Curso registrado <br>Descripción del curso: descripción 2 <br> **\#5** <br>Nombre del curso: <br>Descripción del curso: |
| NOTAS DE PRUEBAS       | **\[Prueba \#1\]**: Registrar un curso en el sistema <br> **\[Prueba \#2\]**: Registrar varios cursos en el sistema <br>**\[Prueba \#3\]**: Cerrar los pop ups <br>**\[Prueba \#4\]**: Registrar curso con el mismo nombre <br>**\[Prueba \#5\]**: Registrar curso sin nombre                                                                                                                                                                                                                                                                                                                                                            |
| DEFECTOS               | **\#1** No encontrados <br>**\#2** Los grupos se registran correctamente pero los pop ups se acumulan, si no se cierran el registro de cursos desaparece de la pantalla. En las sección de calendario y en la de recursos se mueven los elementos hacia abajo hasta desaparecer de la pantalla. <br>**\#3** Los pop ups se cierran correctamente, en registro de cursos se mueve al lugar que corresponde pero la sección calendario y recursos continúan fuera de la pantalla. <br>**\#4** No encontrados <br>**\#5** No encontrados                                                                                                    |
| INCONVENIENTES         | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

**TESTING EXPLORATORIO 2**

| MISIÓN                 | Encontrar defectos en sección calendario                                                                                                                                                                                                                                                                                                                                                                         |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INICIO                 | 30/11/2024 \- 9:33 am                                                                                                                                                                                                                                                                                                                                                                                            |
| TESTER                 | Salvador Depons                                                                                                                                                                                                                                                                                                                                                                                                  |
| ESTRUCTURA DE DIVISIÓN | **DURACIÓN:** Corta (30v´) <br> **DISEÑO Y EJECUCIÓN DE PRUEBAS:** 60% <br> **INVESTIGACIÓN Y REPORTES DE DEFECTOS:** 20 % <br> **ARMADO DE LA SESIÓN:** 20% <br> **OBJETIVO vs. OPORTUNIDAD:** 80 / 20                                                                                                                                                                                                          |
| SET UP                 | Navegador: Opera GX Sistema Operativo: Windows 10                                                                                                                                                                                                                                                                                                                                                                |
| ARCHIVOS DE DATOS      | \#1 Nombre del curso: m3a Descripción del curso: grupo matutino<br> \#2 Nombre del curso: m4c Descripción del curso: grupo nocturno<br> \#3 Nombre del curso: m4a Descripción del curso: grupo matutino<br> \#4 Nombre del curso: m2b Descripción del curso: grupo matutino                                                                                                                                      |
| NOTAS DE PRUEBAS       | \[Prueba \#1\]: Entrar a la sección <br>\[Prueba \#2\]: Seleccionar un dia en el calendario <br> \[Prueba \#3\]: Agregar un evento <br> \[Prueba \#4\]: Agregar cursos                                                                                                                                                                                                                                           |
| DEFECTOS               | \[Prueba \#1\]: Cuando entro a la pagina el calendario se ve muy pequeño. Deja mucho espacio en blanco.<br> \[Prueba \#2\]: No me deja seleccionar ningún dia. <br> \[Prueba \#3\]: El botón agregar evento no tiene efecto, no me avisa si estoy haciendo algo mal.<br> \[Prueba \#4\]: Al agregar cursos, el calendario se desplaza hacia abajo. Al agregar más de 3 cursos el calendario deja de ser visible. |
| INCONVENIENTES         | \-                                                                                                                                                                                                                                                                                                                                                                                                               |
|                        |                                                                                                                                                                                                                                                                                                                                                                                                                  |

**TESTING EXPLORATORIO 3**

| MISIÓN                 | Verificar responsividad                                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INICIO                 | 30/11/2024 \- 10:05 am                                                                                                                                                                                                                                                                                                                                                                                                      |
| TESTER                 | Valentina Velazquez                                                                                                                                                                                                                                                                                                                                                                                                         |
| ESTRUCTURA DE DIVISIÓN | **DURACIÓN:** Corta (30v´) <br>**DISEÑO Y EJECUCIÓN DE PRUEBAS:** 80% <br>**INVESTIGACIÓN Y REPORTES DE DEFECTOS:** 10 % <br>**ARMADO DE LA SESIÓN:** 10% <br>**OBJETIVO vs. OPORTUNIDAD:** 90 / 10                                                                                                                                                                                                                         |
| SET UP                 | Navegador: Opera GX Sistema Operativo: Windows 10                                                                                                                                                                                                                                                                                                                                                                           |
| ARCHIVOS DE DATOS      | **\#1** --- <br>**\#2** <br>Nombre del curso: Curso 1 <br> Descripción del curso: Descripción <br>Nombre del curso: Curso 2 <br> Descripción del curso: Descripción <br>Nombre del curso: Curso 3 <br> Descripción del curso: Descripción <br>Nombre del curso: Curso 4 <br> Descripción del curso: Descripción <br>**\#3** --- <br>**\#4** <br>Nombre del curso: Curso registrado <br>Descripción del curso: Descripción 1 |
| NOTAS DE PRUEBAS       | **\[Prueba \#1\]**: Abrir pagina web en iphone 12 pro (mediante herramienta del navegador) <br>**\[Prueba \#2\]**: Registrar cursos. <br>**\[Prueba \#3\]**: Cerrar los pop ups. <br>**\[Prueba \#4\]**: Agregar planificación a grupo.                                                                                                                                                                                     |
| DEFECTOS               | **\#1** La barra de navegación se rompe, no se alinea correctamente <br>**\#2** Mismos problemas al registrar curso en flujo usual. <br>**\#3** Los pop ups se cierran correctamente, mantiene el flujo habitual. <br>**\#4** La planificación no se ajusta a la pantalla, al completar los datos no se ve correctamente lo que se escribe ni el nombre de la categoría.                                                    |
| INCONVENIENTES         | –                                                                                                                                                                                                                                                                                                                                                                                                                           |

**TESTING EXPLORATORIO 4**

| MISIÓN                 | Encontrar defectos en lista cursos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INICIO                 | 30/11/2024 \- 10:16 am                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| TESTER                 | Salvador Depons                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ESTRUCTURA DE DIVISIÓN | **DURACIÓN:** Corta (30v´)<br> **DISEÑO Y EJECUCIÓN DE PRUEBAS:** 60% <br>**INVESTIGACIÓN Y REPORTES DE DEFECTOS:** 30 %<br> **ARMADO DE LA SESIÓN:** 10% <br> **OBJETIVO vs. OPORTUNIDAD:** 60 / 40                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| SET UP                 | Navegador: Opera GX Sistema Operativo: Windows 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ARCHIVOS DE DATOS      | \#1 Nombre del curso: m4a Descripción del curso: grupo matutino <br>\#2 Nombre del curso: m4c Descripción del curso: grupo nocturno <br>\#3 Nombre del curso: m4a Descripción del curso: grupo matutino<br> \#4 Nombre del curso: m2b Descripción del curso: grupo matutino                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| NOTAS DE PRUEBAS       | \[Prueba \#1\]: Entrar a la sección <br>\[Prueba \#2\]: Agregar un curso<br> \[Prueba \#3\]: Ir al curso<br> \[Prueba \#4\]: Agregar planificación \[Prueba \#4\]: Agregar varios cursos y crear planificaciones                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DEFECTOS               | \[Prueba \#1\]: Cuando ingresó a la sección la página está vacía, no contiene ninguna información o instrucción<br> \[Prueba \#3\]: Cuando se clickea el botón, ir al curso aparentemente no sucede nada, pero si se hace scroll en la página, se puede ver el apartado de planificación. <br>\[Prueba \#4\]: Al agregar una planificación, aparece un cartel el cual no desaparece en ningún momento haciendo que la pantalla de sature de carteles si el usuario no los cierra manualmente. También al agregar una planificación los datos ingresados nos limpian. <br>\[Prueba \#4\]: Al presionar el botón de ir al curso en cualquier grupo, los carteles de “Planificación de \_\_ agregada/actualizada correctamente\!” se mantienen para cualquier curso. |
| INCONVENIENTES         | \-                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

**TESTING EXPLORATORIO 5**

| MISIÓN                 | Comprobar gramática y ortografía en todo el sitio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INICIO                 | 30/11/2024 \- 10:40 am                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| TESTER                 | Valentina Velazquez                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ESTRUCTURA DE DIVISIÓN | **DURACIÓN:** Corta (30v´) <br>**DISEÑO Y EJECUCIÓN DE PRUEBAS:** 80% <br>**INVESTIGACIÓN Y REPORTES DE DEFECTOS:** 10 % <br>**ARMADO DE LA SESIÓN:** 10% <br>**OBJETIVO vs. OPORTUNIDAD:** 90 / 10                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SET UP                 | Navegador: Opera GX Sistema Operativo: Windows 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ARCHIVOS DE DATOS      | **\#1** – <br>**\#2** Nombre del curso: Curso 1 Descripción del curso: Descripción Nombre del curso: Curso 2 Descripción del curso: Descripción Nombre del curso: Curso 3 Descripción del curso: Descripción Nombre del curso: Curso 4 Descripción del curso: Descripción <br>**\#3** --- <br>**\#4** Nombre del curso: Curso registrado Descripción del curso: descripción 1                                                                                                                                                                                                                                                                   |
| NOTAS DE PRUEBAS       | **\[Prueba \#1\]**: Gramática y ortografía en Sección “Agregar curso” <br>**\[Prueba \#2\]**: Gramática y ortografía en Sección “Lista cursos” <br>**\[Prueba \#3\]**: Gramática y ortografía en Sección “Calendario” <br>**\[Prueba \#4\]**: Gramática y ortografía en Sección “Links útiles”                                                                                                                                                                                                                                                                                                                                                  |
| DEFECTOS               | **\#1** "Hola maestra\!" debería ser "¡Hola, maestra\!". "Lista cursos" debería ser "Lista de cursos". "Pizarron de tiza": debería ser: "Pizarrón de tiza" en alt text. Falta exclamación al comienzo del pop up. <br>**\#2** El pop up al agregar planificación "Planificación de Curso de prueba agregada/actualizada correctamente\!" debería ser: "¡Planificación de Curso de Prueba agregada/actualizada correctamente\!" <br>**\#3** Sin errores. <br>**\#4** "Links utiles" debería ser: "útiles". "Guia para la implementacion": Faltan tildes en "Guía" e "implementación". "transformacion curricular integral": Falta tilde en "transformación". |
| INCONVENIENTES         | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Reporte de issues

![reporteIssues](/docs/img_issues/reporteIssues.JPG)

### Buenas prácticas de reporte

Para el reporte de issues, decidimos basarnos en el template proporcionado por el curso, con algunas modificaciones dependiendo del caso específico. Consideramos una buena práctica mantener la amabilidad y ofrecer críticas constructivas, enfocándonos específicamente en los aspectos del sistema y no en el equipo de desarrollo.
Siempre que sea posible, adjuntamos imágenes que complementen la descripción del issue. Además, todos los reportes incluyen un paso a paso detallado que permite replicar el error.

Los datos que agregamos al issue son:

About:  
Labels:  
Assignees:  
Descripción:  
Entorno:  
Ambiente:  
Precondiciones:  
Datos de entrada:  
Resultado esperado:  
Resultado obtenido:

### Clasificación

Para clasificar los issues utilizamos los siguientes tags que definen el motivo:

- bug (funcionamiento defectuoso del sistema)
- sugerencia (aspecto a tener en cuenta para la mejora del sistema)
- consulta (duda del equipo de testing acerca de alguna funcionalidad del sistema)
- accesibilidad (no cumple alguna pauta de WAG)
- usabilidad (no cumple alguna heurística de Jakob Nielsen)
- mantenibilidad (aspectos de codigo poco mantenibles en el tiempo)

También clasificamos según importancia con los siguientes tags:

- Alta_Prioridad (Es sumamente importante corregirlo)
- Media_Prioridad (Sería útil corregirlo)
- Baja_Prioridad (Agregaría valor al sistema pero no es fundamental)

Otra clasificación es según su severidad la cual tiene los siguientes tags:

- Alta_Severidad (Es inaceptable)
- Media_Severidad (Es grave pero no es inaceptable)
- Baja_Severidad (Es poco grave)

## Informe de calidad del sistema

### Resumen de issues por tipo y severidad

| Título issue                                                            | Tipo        | Prioridad | Severidad | Labels              |
| :---------------------------------------------------------------------- | :---------- | :-------- | :-------- | :------------------ |
| Sugerencia/consulta en planificación                                    | enhancement | Baja      | Baja      | sugerencia/consulta |
| Problema de desplazamiento de divs tras agregar cursos                  | bug         | Alta      | Alta      | sugerencia/bug      |
| Debería haber limite de caracteres                                      | invalid     | Media     | Baja      | mantenibilidad      |
| Tamaño del calendario deja mucho espacio en blanco                      | enhancement | Media     | Baja      | usabilidad          |
| Días no seleccionables en el calendario                                 | bug         | Alta      | Alta      | bug                 |
| Botón 'Agregar Evento' sin funcionalidad                                | bug         | Alta      | Alta      | bug                 |
| Página Vacía al comienzo en "Lista de Cursos”                           | bug         | Media     | Media     | usabilidad          |
| Visualización De planificación en mobile                                | invalid     | Media     | Media     | bug/usabilidad      |
| Errores de Gramática y Ortografía en la Interfaz                        | enhancement | Baja      | Baja      | calidad             |
| Modificar planificación aparece al hacer scroll                         | invalid     | Alta      | Alta      | bug/usabilidad      |
| Carteles que no desaparecen                                             | invalid     | Baja      | Baja      | bug/usabilidad      |
| Los carteles de planificación se mantienen visibles al cambiar de curso | invalid     | Alta      | Alta      | bug/usabilidad      |

---

### Evaluación global de calidad

#### **Evaluación según las Heurísticas de Jakob Nielsen**

- **Visibilidad del estado del sistema:** No cumple.
- **Correspondencia con el mundo real:** Cumple.
- **Control y libertad del usuario:** No cumple.
- **Consistencia y estándares:** Cumple.
- **Prevención de errores:** No cumple.
- **Reconocimiento antes que recuerdo:** Cumple.
- **Flexibilidad y eficiencia de uso:** No cumple.
- **Diseño minimalista:** Cumple.
- **Mensajes de error claros:** Cumple.
- **Documentación/Ayuda accesible:** No cumple.

#### **Evaluación según estándares de codificación**

- **Indentación y formato:** El código está correctamente indentado y sigue un formato coherente. **CUMPLE.**
- **Nombres significativos:** Variables, funciones y clases tienen nombres claros y descriptivos. **CUMPLE**, aunque sería recomendable agregar pre y poscondiciones para las funciones.
- **Comentarios útiles:** No hay comentarios explicativos en el código. **NO CUMPLE.**
- **Evitar código duplicado:** No hay duplicación innecesaria de código. **CUMPLE.**
- **Uso adecuado de convenciones:** No se siguen las guías de estilo para HTML, CSS y JavaScript. **NO CUMPLE**, ya que no utiliza HTML semántico.

#### **Comentarios adicionales**

La elección de clases parece poco mantenible, ya que resulta inusual crear clases únicamente para que actúen como listas de otras clases. Una mejor práctica sería tener una clase tipo "Sistema" donde se guarden todas las listas.

Además, no existe modularización del archivo principal (_main_), aunque esto no parece ser un problema crítico debido a su extensión limitada.

#### **Conclusión**

A partir de las pruebas realizadas, tanto funcionales como exploratorias, podemos concluir que la calidad general del sistema es bastante deficiente. Aunque cumple con los requerimientos mínimos del proyecto, el diseño y funcionamiento dejan mucho que desear. Una de sus peores cualidades es su falta de intuitividad, lo que confundiría a un usuario promedio. Además, existen pocas o nulas confirmaciones de las acciones realizadas. Ademas la mayoria de secciones np permite corregir errores cometidos por el usuario.
## Reflexión

### Detalle del trabajo individual

|     Responsable     | Actividad                                                       | Tiempo        |
| :-----------------: | :-------------------------------------------------------------- | ------------- |
|      Salvador       | Testing exploratorio 2 y 4                                      | 1 hora 40 min |
|      Valentina      | Testing exploratorio 1, 3 y 5                                   | 2 hora        |
|      Salvador       | Casos de prueba caja negra planificacion                        | 20 min        |
|      Valentina      | Casos de prueba caja negra agregar curso                        | 20 min        |
| Salvador, Valentina | Definición de ambientes de testing y ejecución de casos         | 30 min        |
|      Salvador       | Issues 1 y 2                                                    | 40 min        |
| Salvador, Valentina | Buenas prácticas de reporte                                     | 10 min        |
| Salvador, Valentina | Resumen de issues por tipo y severidad                          | 20 min        |
|      Valentina      | Tecnicas aplicadas y aprendizajes, Evaluación global de calidad | 40 min        |

### Técnicas aplicadas y aprendizajes

En la parte de testing, tratamos de evaluar la calidad del proyecto asignado. Para ello, utilizamos gran parte de las herramientas aprendidas en clase. Entre estas, las que consideramos más útiles fueron las pruebas funcionales de caja negra, específicamente la técnica de partición de equivalencias, ya que nos pareció la más adecuada dado que las pruebas de valores límites resultaron bastante complicadas de aplicar en el contexto de este sistema (debido que no hay casi validaciones). Otra técnica utilizada, y la que en nuestra opinión nos brindó más información, fue el testing exploratorio. Este enfoque nos permitió, además de analizar los flujos intuitivos del sistema, validar la responsividad, así como la gramática y la ortografía. Dicho esto nos gustaria agregar que consideramos que las herramientas y técnicas de testing que hemos utilizado en este proyecto nos serán de gran ayuda, ya que resultan utiles no solo para evaluar proyectos ajenos como tambien para validar el funcionamiento de los nuestros.
