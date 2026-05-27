**Proyecto: El Clon Insta**

Este README describe la organización del proyecto, los componentes creados, su responsabilidad y las decisiones técnicas tomadas para cumplir los requisitos del ejercicio.

**Division de tareas**
-Luca Gamas De Maio: Backend
-Elian Ulman: Backend
-Benjamin Hamra Minian: Frontend

**Organización Del Proyecto**
- **Carpetas clave:**: La aplicación está en `src/` con lógica agrupada así:
  - [src/Components](src/Components#L1): componentes de páginas y estilos principales.
  - [src/Components/components](src/Components/components#L1): elementos reutilizables (cards, botones, publicaciones).
  - [src/api_connection/api.js](src/api_connection/api.js#L1): capa mínima para llamadas a datos (mock o real).


**Componentes Creados**
- **`App.jsx`**: punto de entrada, mantiene estados globales mínimos y enrutamiento/condicional de vistas.
- **`Feed.jsx`**: lista principal de estados/publicaciones; muestra el flujo principal.
- **`PublicacionEspecifica.jsx`**: vista/overlay para visualizar una publicación individual.
- **`PublicacionesPerfil.jsx`**: lista de publicaciones de un perfil concreto.
- **`MiPerfil.jsx`**: simulate del perfil del usuario logueado (avatar, biografía, métricas, publicaciones).
- Elementos reutilizables (en `src/Components/elements`): **`Publicacion.jsx`**, **`Comentario.jsx`**, **`PerfilSugerido.jsx`**, **`followBtn.jsx`**, **`BarraLateral.jsx`**, **`Footer.jsx`**.

**Responsabilidad De Cada Componente**
- **`App.jsx`**: coordina vistas principales y mantiene estados que afectan a varias vistas (por ejemplo, `selectedPostId`).
- **`Feed.jsx`**: recibe la lista de publicaciones y renderiza `Publicacion` por cada item; notifica selecciones al padre mediante props.
- **`Publicacion.jsx`**: representación de una publicación individual (imagen, texto, contadores); encapsula interacciones (abrir individual, like, comentar).
- **`PublicacionEspecifica.jsx`**: muestra detalle completo (comentarios, metadata); puede renderizarse como ruta o modal según estado.
- **`MiPerfil.jsx`**: muestra datos del usuario logueado y su colección de publicaciones (usa `PublicacionesPerfil`).
- **Elementos pequeños**: responsabilidad única y reutilizable (botón de follow, tarjeta sugerida, etc.).

**Por Qué Se Componentizó Así**
- Separación por responsabilidad (Single Responsibility Principle): cada componente tiene una única responsabilidad para facilitar pruebas y reutilización.
- Elementos visuales repetidos (cards, botones, publicaciones) se colocaron en `elements/` para evitar duplicación.
- Las vistas compuestas (`Feed`, `MiPerfil`) orquestan elementos atómicos, manteniendo la lógica de presentación separada de la lógica de negocio.

**Comunicación Entre Componentes (props)**
- Flujo principal: `App` -> (props) -> `Feed` -> `Publicacion`.
- Ejemplo: `Feed` recibe `posts` y una función `onSelectPost(postId)`; `Publicacion` llama `onSelectPost` al pulsar para abrir la vista individual.
- `MiPerfil` recibe `currentUser` (mock) desde `App` y pasa las publicaciones al componente `PublicacionesPerfil`.

**Hooks Utilizados y Para Qué**
- **`useState`**: gestionar estados locales como `selectedPostId`, `isPostOpen`, `currentUser`, `posts` y filtros de vista.
- **`useEffect`**: obtener datos al montar componentes (p. ej. cargar `posts` desde `api_connection/api.js`) y sincronizar con `localStorage` cuando corresponde.
- (Opcional según la implementación) **`useContext`**: si se opta por compartir `currentUser` o preferencias globales, se puede añadir un `UserContext` para evitar prop-drilling.

**Diseño de Figma Utilizado**
- Referencia visual: https://www.figma.com/proto/8dD9KU2MHojRwRz35YCdXX/Instagram---Web-UI--Recreated---Community-?node-id=1-3&t=8FFTDvI3Vwyj1LmH-1

**Visualización Individual de Publicaciones**
- Implementación: al hacer click en una `Publicacion`, se ejecuta `onSelectPost(postId)` que almacena `selectedPostId` en `App` (estado centralizado mínimo).
- Si `selectedPostId` tiene valor, `App` renderiza `PublicacionEspecifica` pasando el objeto completo de la publicación como prop. La vista puede mostrarse como:
  - una ruta dedicada (p. ej. `/post/:id`), o
  - un modal/overlay condicionado por `isPostOpen`.
- En este repositorio está presente `PublicacionEspecifica.jsx` para la vista detallada; la decisión técnica fue usar estado y render condicional para facilitar pruebas sin depender de enrutador.

**Simulación Del Perfil de Usuario Logueado**
- Se usa un objeto mock `currentUser` definido inicialmente en `App.jsx` (o cargado desde `localStorage`) con campos: `id`, `username`, `name`, `avatar`, `bio`, `followers`, `following`, `posts`.
- `MiPerfil.jsx` consume ese objeto vía props (o mediante `UserContext` si se implementa) para renderizar la UI del usuario logueado.

**Datos Mostrados En El Perfil**
- Identificadores y metadatos: **Nombre de usuario**, **nombre real**, **avatar**, **bio**.
- Métricas: **número de publicaciones**, **seguidores**, **seguidos**.
- Contenido: galería/listado de publicaciones (miniaturas y acceso a `PublicacionEspecifica`).

**Estados Utilizados Para Selección y Vista Individual**
- `selectedPostId` (`useState` en `App`): id de la publicación actualmente seleccionada para ver en detalle.
- `isPostOpen` (`useState`): booleano para controlar modal/overlay de detalle.
- `posts` (`useState`): lista de publicaciones cargadas desde `api.js`.
- `currentUser` (`useState` o `useContext`): datos del usuario logueado.
- `profileFilter` (opcional): para filtrar entre publicaciones propias, guardadas o etiquetadas.

**Justificación Técnica**
- Componentizar en vistas (Feed, Perfil) y elementos (Publicacion, Comentario) reduce acoplamiento y facilita reutilización y testeo.
- Mantener el estado mínimo en `App` (selected post, usuario) evita prop-drilling excesivo y permite a componentes hijos ser mayoritariamente presentacionales.
- Separar la capa de acceso a datos (`src/api_connection/api.js`) permite reemplazar el origen de datos (mock -> API real) sin tocar la UI.

Si quieres, ajusto el README para incluir el enlace exacto del diseño de Figma que utilizaste o para convertir `PublicacionEspecifica` a ruta con `react-router`.

----
