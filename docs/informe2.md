# Informe académico (entrega 2)

## Construcción

### Implementación de funciones principales

Para implementar las funciones principales, primero debimos entender cómo iba a funcionar nuestro sistema. Para ello, discutimos la distribución de clases que tendríamos. Al crearlas, nos basamos en el diagrama conceptual creado para el primer informe, en el cual se conectan los conceptos manejados para el proyecto:  
![modelo conceptual](/docs/investigacion/img/diagrama_modelo_conceptual.drawio.png)

De este diagrama, inicialmente creamos las clases:

- **Calendario**
- **Director**
- **Docente**
- **Evento**
- **Grupo**
- **Institución**
- **Planificación**

Además de dos clases de soporte para las interacciones:

- **Sistema**: Interacciones entre clases.
- **Main**: Interacciones entre el HTML y las clases JavaScript.

Si bien las clases iniciales tenían un buen alcance, para el tiempo asignado a la parte de codificación consideramos muy ambiciosa su implementación al completo. Por lo tanto, decidimos dejarlas creadas para una futura reestructuración del proyecto, pero no las utilizamos explícitamente. Las clases descartadas fueron _Director_ e _Institución_.

A partir de esto, nos centramos en la funcionalidad de más alta prioridad: la planificación semanal. Junto con esta decisión, vino un replanteamiento de funcionalidades, principalmente _Calendario_, el cual originalmente iba a ser modificado únicamente por el director de la institución y visualizado por todos los docentes que compartieran institución con el director.

Contextualizando, inicialmente la plataforma iba a ser para uso de varios docentes, instituciones y directores. Para cada institución habría un director y una lista de docentes, cada docente con una lista de grupos asociados. Sin embargo, la lógica del sistema que finalmente implementamos fue la siguiente:  
El sistema sería un subsistema de uno más grande, por lo cual no existe inicio de sesión. Nosotros lo diseñaríamos únicamente para un docente, y solo se podría planificar para la semana actual. Además, el calendario sería generico y conservamos que los docentes tuvieran una lista de grupos.

Dadas estas clases, creamos las secciones HTML.

#### Secciones y sus funcionalidades

- **Docente** (no explicito en html)
  - Cada vez que se agrega un grupo se agrega a la lista del docente que este usuando el sistema.
  - Cada vez que se agrega la planificacion de un dia se agrega a la lista de planificaciones del docente usando el sistema.
- **Calendario**
  - Agregar un evento con dia, nombre, descripcion y color asociado.
  - Eliminar eventos de un dia en particular.
  - Listar eventos del dia al seleccionarlo.
- **Grupos**
  - Agregar grupo con nombre, grado, institucion educativa y cantidad de alumnos.
  - Eliminar grupo de la lista.
- **Planificación**
  - Modificar planificacion de un dia de la semana de lunes a viernes y de un grupo en especifico.
    - Para cada dia se podra modificar: Espacio, unidad curricular, competencia general, competencia especifica, contenido estructural, lista de metas de aprendizaje, lista de planes de aprendizaje y notas.
  - Ver planificacion de un dia de la semana de lunes a viernes y un grupo especifico.
    - Para cada dia se mostrara una planificacion con: Espacio, unidad curricular, competencia general, competencia especifica, contenido estructural, lista de metas de aprendizaje, lista de planes de aprendizaje y notas.

### Librerías externas

- Boostrap: Este framework contiene diversas librerias las cuales nos facilito la creacion de interfaz de usuario y nos permitio hacer un diseno responsive de manera mas eficiente.
- Prettier: Libreria para formatear el codigo bajo el estandar. Para nuestro caso usamos el default con una unica modificacion explicada mas adelante en el informe.
- Eslint: Es la herramienta que nos permitio analizar y corregir errores de código JavaScript, asegurando calidad y consistencia.
- Jest: Framework que nos permitio realizar pruebas unitarias para JavaScript

## Interfaz de usuario

Para nuestra interfaz de usuario intentamos ser lo mas fieles posible a nuestros bocetos de UI realizados en conjunto con las docentes en el Informe 1, con respecto a las buenas practicas realizadas:

### Buenas prácticas

- Intentamos de hacer el HTML semántico, para facilitar la lectura debido a que no se podía separar el HTML en distintos archivos.
- Una práctica que no se hace explícita en el código, pero creemos que es fundamental, fue el uso de WCAG (Web Content Accessibility Guidelines), el cual es un conjunto de reglas asociadas a la accesibilidad. Estas fueron vistas en clase, pero las detallamos (relacionándolas con nuestro proyecto) en la sección de accesibilidad.
- Utilizamos las funciones de desarrollador de Google Chrome, para poder asegurarnos de tener un diseño responsive durante todo el trayecto de desarrollo.
- Mantuvimos consistencia en cuanto a la paleta de colores, estilo de los botones, formularios y todos los elementos de la interfaz de usuario.
- Logramos un diseño minimalista, permitiendo una navegabilidad sencilla e intuitiva.

### Usabilidad

Para la usabilidad en nuestra página decidimos intentar que cumpla con las 10 heurísticas de usabilidad de Jakob Nielsen.
Algunos ejemplos de funciones del sistema que cumplen con alguna heuristica son:

La visibilidad del estado del sistema:

- Independientemente de la sección en la que se encuentre el usuario, siempre hay un título claro que indica la sección actual, asegurando que el estado del sistema sea comprensible y manteniendo al usuario informado del estado del sistema.

La correspondencia entre el sistema y el mundo real:

- Utilizamos un lenguaje claro y entendible para los usuarios, especialmente al comunicar que una acción no está permitida, evitando terminos tecnicos que pueda generar confusión.

El control y la libertad del usuario

- Todos los cambios realizados por los usuarios pueden ser deshechos o modificados, permitiendo corregir errores ofreciendo un mayor control sobre sus acciones. Por ejemplo al crear un grupo u evento, estos se pueden eliminar facilmente. e

El diseño estético y minimalista:

- Diseñamos la interfaz de manera minimalista para reducir elementos innecesarios, evitando así posibles confusiones y ayudando a los usuarios a centrarse únicamente en las tareas relevantes.

Los mensajes de Error:

- Los mensajes de error tiene como principal funcion ayudar a los usuarios a reconocer los errores que estan comentiendo. Indican claramente cuál es el problema y proporcionan pasos específicos para solucionarlo, además de mencionarlos de forma amigable. Por ejemplo al intentar agregar una planificacion sin seleccionar un grupo en vez de mostar un texto como "Accion invalida" (poco explicativo) mostramos "Seleccione grupo. Si no existe grupo, vaya a la seccion grupos".

### Accesibilidad

Nuestro principal enfoque fue lograr que la mayor cantidad de personas pudieran utilizar el sistema, independientemente de si los usuarios tienen alguna restricción. Por ejemplo, para evitar que a los usuarios con daltónismo les resultara difícil usar la página, configuramos un fondo blanco y botones en color rojo. De esta forma, logramos un mejor contraste y reducimos los errores por falta de comprensión visual.

Además, la extensión **Web Accessibility Evaluation Tool (WAVE)** fue de gran ayuda, ya que nos advirtió sobre posibles errores, tanto de HTML al saltarnos un nivel de encabezado o falta de etiquetas, como en cuanto a la elección de colores, esto seria por ejemplo tener poco contraste.

En cuanto a los estándares de **WCAG**, consideramos que logramos cumplir con los siguientes:

- **Compatibilidad**: Tenemos un buen alcance de diseño responsive en dispositivos, para lo que es la problemática (los usuarios utilizan principalmente celular y laptop), además de no perder información al cambiar el tamaño de pantalla.
- **Navegación intuitiva**: Las secciones son fácilmente accesibles y tienen tanto ícono como nombre asociados a su funcionalidad.
- **Legibilidad**: El contenido es fácil de leer, no hay problemas de contraste y presentamos un diseño minimalista que no satura al usuario.
- **Previsibilidad**: La información que aparece en pantalla es predecible.
- **Tiempo**: Los usuarios pueden ir a su tiempo para completar la información.
- **Manejo de errores**: Al cambiar de sección, no se pierde la información ingresada en los formularios, ayudando al usuario en caso de cometer errores. Por ejemplo, si un usuario está haciendo una planificación y se olvida de agregar un grupo, puede ir a la sección de grupos para agregarlo y, al volver, la información que había escrito previamente seguirá ahi.

## Codificación

### Configuración de entorno de desarrollo

Principalmente, todos trabajamos con Visual Studio Code, individualemente ambos usamos la extension gitLens para visualizar mejor los cambios en el repositorio. En cuanto a la configuracion general, usamos Node.js para el manejo de paquetes que usaria todo el equipo. Mediante npm instalamos prettier, eslint y jest. De esta manera ambos tuvimos las mismas reglas de formato y validacion de codigo.

### Estándares de codificación

Para la codificación de la página web, nos aseguramos de que todas las variables utilizadas fueran lo más nemotécnicas posible, de manera que cualquier persona ajena al desarrollo pudiera entender fácilmente lo que representa cada variable al revisar el código. Con ese mismo objetivo, intentamos que las funciones fueran lo más atómicas posibles, evitando así confusiones sobre el propósito de los métodos. Además, agregamos pre y post-condiciones para cada una.

Por otra parte, al iniciar el desarrollo de la página, trabajamos en español. Sin embargo, al aprender que es una buena práctica codificar en inglés, decidimos cambiar todas las variables del sistema a este idioma, ya que era lo más factible. No obstante, debido a la proximidad de la fecha del "Code Freeze", no nos fue posible cambiar también los nombres de los métodos, ya que esto implicaría un cambio demasiado grande en el sistema. De todas formas, tomamos este aprendizaje como referencia para futuros proyectos.

Para los nombres de las variables utilizamos nomenclatura de tipo _snake case_ y para las funciones usamos _Camel Case_. Como ejemplos:

- a_variable
- aFunction

### Buenas prácticas de OOP

Para trabajar correctamente con buenas prácticas de programación orientada a objetos, definimos todas las clases necesarias para nuestro problema. Estas clases están explicadas en la sección de construcción.

Adicionalmente, creamos un archivo principal llamado **Sistema.js**, que maneja la lógica principal del proyecto, o sea este se encarga de la interacción entre clases.

Para gestionar la interacción con el HTML, desarrollamos un archivo llamado **Main.js** el cual relaciona la interfaz de usuario y la lógica del sistema. Sin embargo, debido a que esta clase se volvio demasiado extensa, decidimos modularizarla, dividiendo cada seccion del html en diferentes módulos representativos, mejorando asi la organización. Esta modularización no solo permitió que el código sea más claro, sino que también más flexible para futuras modificaciones.

### Análisis estático de código

Durante el análisis estático del código utilizamos Prettier y ESLint como herramientas principales. Sin embargo, inicialmente tuvimos problemas porque al ejecutar "npm run test" (que corre el script configurado en el archivo package.json), también se ejecutaba Prettier. Este estaba configurado para realizar correcciones automáticas, como eliminar comas adicionales en las llamadas a funciones con parámetros opcionales. Esto causaba conflictos, ya que nuestra función estaba diseñada para aceptar menos parámetros, y Prettier marcaba este comportamiento como incorrecto.

Para solucionar el problema, ajustamos la configuración de Prettier en el archivo package.json, agregando la regla de que ignore las comas adicionales. Esto eliminó los errores, permitió que los tests se ejecutaran correctamente y, al ejecutar "npm run" lint de forma independiente, ya no se reportara ningun error ni advertencia.

Lo que agregamos al archivo package.json fue:  
![prettier](/docs/investigacion/img/prettier_photo.JPG)

## Checkpoint obligatorio 2

Hasta la fecha del checkpoint, el mayor avance fue en la parte visual de la página web, logrando implementar el HTML de las secciones Planificar, Menú, Grupos y Calendario. También definimos los objetos que utilizaremos en la página: Planificación, Calendario, Director, Docente, Evento, Grupo e Institución. Además, implementamos una clase Sistema.js para organizar la lógica de los objetos y facilitar el desarrollo.

Tenemos un archivo Main.js que se encarga de la interacción con el HTML, en el cual logramos completar la sección de grupos, permitiendo registrar grupos, listarlos y eliminarlos. Es importante destacar que, para poder ingresar un grupo, es necesario que se registre con el nombre de institución “ort”, ya que por el momento pre-cargamos ese objeto para habilitar esta funcionalidad.

Otro gran avance fue que todas las clases .js cuentan con sus respectivos métodos get y set, además de sus constructores y atributos definidos. También implementamos clases de prueba donde realizamos test unitarios para verificar todas las funciones desarrolladas hasta el momento.

Por otra parte, logramos instalar Prettier y ESLint en el proyecto, además de corregir los errores y advertencias marcados por la extensión "WAVE evaluation tool". Todos los elementos de la página son responsive para la mayoría de los celulares.

Una de las tareas pendientes es la instalación de Bootstrap de manera local, ya que notamos que al usar Bootstrap vía enlace, la funcionalidad de la sección de grupos no se ejecuta correctamente debido a un error generado por el enlace de Bootstrap, que comienza con "http". Al desarrollar esta función, utilizamos la extensión "Live Server", en la cual la funcionalidad se muestra sin problemas.

## Test unitario

### Buenas prácticas

Para los tests unitarios realizados las buenas prácticas que incluimos fueron: nombres de variables descriptivos, por ejemplo, en un test enfocado en probar una función setNombre(), utilizamos las variables expected_name, que se refiere al nuevo nombre que utilizaremos en el método set, y lo comparamos con el nombre de la clase luego de invocar el método.  
Por otra parte, intentamos que la mayoría de los tests sean lo más atómicos posible, utilizando la menor cantidad de métodos distintos para aislar los errores y facilitar su corrección.  
Otra buena práctica fue asegurarnos de que los nombres de los tests ayuden lo más posible al desarrollador a entender cuál era el objetivo de la prueba.
En caso de realizar un test compuesto de varias funciones o cuyo funcionamiento sea poco común, agregamos comentarios que expliquen lo realizado.

Ademas, consideramos que una buena práctica fue la implementación de tests en paralelo al desarrollo del sistema, para así asegurar un correcto funcionamiento de las clases antes de avanzar con otra implementación distinta. Sin embargo, esto se volvió algo tedioso, ya que realizar los tests a medida que se implementaba el sistema provocaba que cualquier modificación en alguna clase requiriera ajustes en los tests previamente realizados.

Por otra parte utilizamos la función beforeEach() en cada archivo de test, donde definimos variables estándar para ahorrarnos el trabajo de declararlas en cada test unitario y ademas mejorando la prolijidad y entendimiento del archivo. Esto fue muy útil, sobre todo en los tests más pequeños, como los de set y get.

También implementamos los tests de las clases Institución y Director, aunque no se utilicen en la versión actual del sistema, ya que consideramos que sería una buena práctica tener pruebas para estas clases en caso de un futuro uso.

### Informe de cobertura

Para la cobertura de los tests, consideramos como mínimo un 100% de cobertura en todas las clases. Una vez alcanzada esa base, comenzamos a analizar casos fuera de los comunes que podrían generar errores en el funcionamiento de los métodos.
Al finalizar la etapa de desarrollo concluimos con un total de 133 test unitarios realizados en combinacion de todas las clases del proyecto.

![tests](/docs/investigacion/img/testsCorrectos.JPG)

## Reflexión

### Detalle del trabajo individual

|     Responsable     | Actividad                                                                                      | Tiempo         |
| :-----------------: | :--------------------------------------------------------------------------------------------- | -------------- |
| Salvador, Valentina | Creacion de index.html y style.css                                                             | 10 min         |
| Salvador, Valentina | Creacion seccion ver-modificar, planificaciones y home (HTML)                                  | 4 hora 10 min  |
| Salvador, Valentina | Implementacion seccion grupos en html                                                          | 1 hora         |
| Salvador, Valentina | Primera Implementacion de seccion calendario, un arreglo en grupo y agregacion de un footer    | 3 horas        |
| Salvador, Valentina | Clases del dominio, constructores, y las firmas de las funciones                               | 3 hora 20 min  |
|      Valentina      | Arreglo responsive de planificacion                                                            | 1 hora         |
|      Salvador       | Primera version de la funcionalidad grupos, creacion de main, funciones en sistema             | 2 hora 10 min  |
| Salvador, Valentina | Completo funcionalidad de agregar y eliminar grupos, Test de todas las clases, funcionando 50% | 5 hora 20 min  |
| Salvador, Valentina | 115 test y funcionalidad de grupos correguida                                                  | 4 hora 30 min  |
|      Salvador       | Documentacion Checkpoint 2                                                                     | 30 min         |
|      Salvador       | Agregacion de lista de grupos en seccion planificacion                                         | 40 min         |
| Salvador, Valentina | Implementacion de la funcionalidad de planificacion modificar y ver, con falla en seccion ver  | 2 horas 20 min |
|      Valentina      | Arreglos en planificacion                                                                      | 40 min         |
|      Salvador       | Correcciones en mainjs                                                                         | 40 min         |
|      Salvador       | Solucion de bug en ver planificacion                                                           | 20 min         |
|      Salvador       | Agregacion y corrección de test                                                                 | 1 hora 10 min  |
|      Salvador       | Coreccion en ver planificacion, se limpia antes de mostrar                                     | 40 min         |
|      Valentina      | Funcionalidad de calendario.                                                                   | 2 horas        |
| Salvador, Valentina | Agrego test y corrijo antigos                                                                  | 1 hora 30min   |
| Valentina, Salvador | Completos test coverage al 100%                                                                | 2 horas        |
|      Salvador       | Agregar funcion de eliminar eventos del dia                                                    | 1 hora         |
|      Salvador       | Cambios minimos en test de institucion                                                         | 10 min         |
| Valentina, Salvador | Cambio de idioma de variables y agregacion de alertas como parrafos                            | 2 horas 10 min |
| Valentina, Salvador | Modularizacion del main.js                                                                     | 50 min         |
|      Valentina      | Seccion "Implementación de funciones principales" y "Librerias" en informe 2                   | 1 hora 15 min  |
|      Valentina      | Seccion "Buenas practicas de interfaz de usuario" y "Configuracion de entorno de desarrollo"   | 30 min         |
|      Salvador       | Seccion "Usabilidad", "Accesibilidad" y "Estandares de Codificacion"                           | 50 min         |
|      Valentina      | Seccion "Buenas prácticas de OOP"                                                              | 10 min         |
|      Salvador       | Seccion "Buenas prácticas de testing unitario " e "Informe de cobertura"                       | 30 min         |
|      Salvador       | Seccion " Análisis estático de código"                                                         | 15 min         |
|      Valentina      | Seccion "Técnicas aplicadas y aprendizajes"                                                    | 10 mins        |

---

### Técnicas aplicadas y aprendizajes

Este proyecto nos brindó un gran aprendizaje en todos los ámbitos, ya que ambos desconocíamos la mayor parte de las tecnologías utilizadas. Al comienzo, debimos adaptarnos al uso de Git, pero esto no supuso un gran esfuerzo, pues es una herramienta muy intuitiva.

Cuando llegamos a la parte de la interfaz de usuario, nos entusiasmamos bastante, ya que era un área en la que deseábamos profundizar. Creemos que esto se refleja en el resultado final de la interfaz. Dentro de este proceso, lo que más trabajo nos llevó fue la creación del calendario, el cual terminamos por implementar con una lista ordenada y darle formato mediante CSS, ya que las herramientas de Bootstrap resultaron insuficientes para nuestra visión de la interfaz.

En cuanto a la codificación, por primera vez adoptamos un estándar consistente para el nombrado de variables. Esto fue bastante desafiante, ya que uno tiende a acostumbrarse a malas prácticas. Sin embargo, esta decisión de diseño también impactó positivamente nuestra vida como programadores, extendiendo este enfoque a otros proyectos en los que trabajamos actualmente.

Asimismo, descubrimos la existencia de herramientas de testing, que nos resultaron extremadamente útiles. Más allá de ser una buena práctica, facilitan la detección de bugs y ahorran tiempo, evitando tener que analizar el código durante horas para encontrar errores. También incorporamos Prettier y ESLint, herramientas que, sin duda, adoptamos fuera del proyecto, ya que contribuyen significativamente a agilizar la codificación.

En resumen, este proyecto fue una experiencia que nos permitió mejorar nuestra callidad como desarrolladores y nos llevo a conocer herramientas que continuaremos utilizando en el futuro.
