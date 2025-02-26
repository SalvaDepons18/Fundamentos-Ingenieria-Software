# Estructura de un SRS:

## 1. Introducción -

La introducción explica el significado de SRS en general, su alcance para su equipo y su estructura.

## 1.1. Propósito

Aquí, explique el objetivo y la estructura de la documentación del software SRS: los tipos de requisitos que se abordarán, así como el personal que lo utilizará.

Mantenga esta sección corta: 1-2 párrafos son suficientes.

## 1.2. Público objetivo

Puede profundizar y explicar cómo las partes interesadas y los equipos trabajarán con SRS, así como también participarán en su desarrollo. Estos suelen ser propietarios de productos, inversores, analistas de negocios, desarrolladores, a veces probadores y personal de operaciones. Toda la estructura está determinada por su enfoque de desarrollo de software y la configuración organizativa del equipo.

## 1.3. Uso previsto

Describa en qué situaciones su equipo utilizará el SRS. Por lo general, se utiliza en los siguientes casos:

diseño y lluvia de ideas sobre nuevas características
planificación de la duración del proyecto, sprints, estimación de costos
evaluación de riesgos
monitorear y medir el éxito del equipo
situaciones conflictivas cuando las partes involucradas tienen diferentes visiones de un producto bien ejecutado.

## 1.4. Alcance

Esta parte cubre el alcance del producto, por lo que deberá brindar una descripción general rápida del sistema: su propósito principal, función y posición. Es comparable a cómo explicaría un producto en una reunión de partes interesadas, excepto que se permite profundizar en detalles técnicos.

Esta sección tiene que describir:

Todos los tipos de usuarios que se espera que interactúen con el sistema
Todas las partes esenciales de la arquitectura.
1.5 Definiciones y siglas

Los componentes antes mencionados constituyen una definición. Las definiciones brindan información sobre la función, las tecnologías subyacentes, las personas objetivo, las entidades comerciales (usuarios, clientes, intermediarios) y las partes interesadas. Puede usar un acrónimo para escribir su SRS más rápidamente si así lo desea. El documento será legible siempre que la tabla de definiciones lo tenga incluido.

A lo largo de su documento, el equipo usa con frecuencia ciertas palabras. Eliminar cualquier posible malentendido, permitir que nuevos desarrolladores se incorporen y resolver situaciones conflictivas será más fácil si aclara el significado de estas palabras.

## 2. Descripción general

En la segunda parte, describe a los lectores las características principales del producto, los usuarios objetivo y el alcance del sistema. Esta descripción se concentra solo en las características clave y la arquitectura del software sin entrar en detalles sobre complementos y conexiones.

## 2.1 Necesidades del usuario

Esta parte es una cuestión de elección, por lo que algunas organizaciones optan por no incluirla en su documentación de ingeniería de SRS. Creemos que es mejor enumerar los problemas que desea resolver con su funcionalidad en este momento. Será útil más adelante durante las funciones de lluvia de ideas y monitoreo. Puede volver a esta sección en cualquier momento durante el proceso de desarrollo del producto y ver si el equipo de experiencia del usuario no se ha desviado del camino previsto.

Las necesidades se refieren a problemas que los usuarios podrán resolver con el sistema. Puede dividir estas necesidades en subcategorías si trata con una audiencia altamente segmentada. Trate de no entrar en detalles sobre las necesidades de cada usuario. Debe dejar algo de espacio para la interpretación, en caso de que un problema resulte ser más importante de lo que pensó inicialmente.

## 2.2 Supuestos y Dependencias

Las suposiciones son las suposiciones del equipo sobre el producto y sus capacidades que serán correctas en el 99 % de las situaciones. Es natural suponer, por ejemplo, que una plataforma que ayuda a los conductores a navegar de noche se utilizará principalmente en modo nocturno.

¿Cuál es la importancia de las suposiciones? Le permiten concentrarse primero en las funciones más importantes de la aplicación. Esta suposición ayuda a comprender que los diseñadores deben desarrollar una interfaz adecuada para la visión en la oscuridad para un asistente de conducción nocturna. Es posible que algunos usuarios abran la aplicación durante el día, pero es una posibilidad remota, por lo que no necesita incluir elementos relacionados en el prototipo de inmediato.

## 3. Características y requisitos del sistema

Esta parte cubre las características del producto y los criterios de ejecución en detalle. Debido a que las dos secciones anteriores abordan el producto como un todo, aquí encontrará una descripción más completa.

## 3.1 Requisitos funcionales

Los requisitos funcionales se establecen en una lista de funciones que se llevarán a cabo en un sistema. Estos criterios tienen que ver con "¿qué se creará?" en lugar de "cómo" y "cuándo".

Los requisitos funcionales comienzan describiendo la funcionalidad requerida en función de lo esencial que es para la aplicación. Si desea trabajar en él primero, puede comenzar con el diseño, pero luego debe pasar al desarrollo. Los requisitos funcionales no entran en gran detalle sobre las pilas de tecnología, ya que pueden cambiar a medida que avanza el proyecto. En lugar de concentrarse en la lógica interna, los requisitos funcionales se centran en la funcionalidad del usuario final.

## 3.2 Requisitos de la interfaz externa

Los requisitos funcionales son una parte importante de una especificación de requisitos del sistema. Para cubrir todas las características necesarias del sistema, necesitará 4-5 páginas de información. Algunos equipos los desglosan por temas para que el documento sea más fácil de leer.

Por lo general, los componentes de diseño de SRS se denominan independientes del back-end y la lógica empresarial. Esto tiene sentido ya que los diseñadores en lugar de los desarrolladores manejan la mayor parte de esta área, pero también porque es donde comenzará el proceso de desarrollo del producto.

Según el proyecto, los requisitos de la interfaz externa pueden ser de cuatro tipos:

Interfaz de usuario
Interfaz de software
Interfaz de hardware
Interfaz de comunicaciones
Los requisitos de la interfaz externa describen los elementos de la página que serán visibles para el cliente final. Pueden incluir la lista de páginas, elementos de diseño, temas estilísticos clave, incluso elementos artísticos y más si son esenciales para el producto.

## 3.3 Requisitos del sistema

Los requisitos del sistema del producto establecen las condiciones en las que se puede utilizar. Por lo general, pertenecen a las especificaciones y características del hardware. Los requisitos de hardware de SRS a menudo se definen por rangos mínimos y máximos, así como por un umbral óptimo de rendimiento del producto.

Crear requisitos del sistema antes de comenzar a crear un producto puede parecer difícil, pero es esencial. Los desarrolladores deben cumplir con los requisitos de hardware para no tener que reiniciar el proyecto más tarde. Las aplicaciones móviles (con muchas variables a considerar) y las aplicaciones que necesitan una alta reactividad (juegos, cualquier producto con VR/AR o IoT) son particularmente vulnerables.

## 3.4 Requisitos no funcionales

Para muchas organizaciones, esta parte de un SRS es la más difícil. Si los requisitos funcionales abordan la cuestión de qué crear, los estándares no funcionales definen cómo. Establecen los criterios de acuerdo con la eficacia con la que debe operar el sistema. Los umbrales de rendimiento, seguridad y facilidad de uso están todos incluidos en esta área.

El valor real es lo que dificulta la definición de requisitos no funcionales. Es difícil definir frases como "simultaneidad" o "portabilidad", ya que pueden tener varias interpretaciones para todas las partes involucradas. Como resultado, recomendamos otorgar una puntuación a cada requisito no funcional. Puede revisar los requisitos de su proyecto en cualquier momento para ver si el sistema actual satisface las expectativas iniciales.

### Referencia: visoresolution
