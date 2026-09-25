# Creación de usuario — integración

## Contexto

`userCreation.tsx` existía como un archivo vacío/placeholder (un `<main>`
sin contenido). `create_user.html` es el prototipo estático (Tailwind CDN +
JS vanilla) de la pantalla "Crear nuevo usuario". Esta migración:

1. Corrige el ruteo dentro de `admin.routes.tsx` para que la pantalla de
   creación de usuario sea alcanzable sin romper el listado de Usuarios.
2. Reescribe `userCreation.tsx` en base al formulario real de
   `create_user.html`, con estado y validación en React en vez de
   manipulación directa del DOM.
3. Mueve toda la lógica ("cómo") a `admin.controller.ts`, dejando a los
   componentes solo la llamada a funciones ("qué"), siguiendo el mismo
   patrón ya establecido para el sidebar y el header.
4. Conecta los dos botones "+ Crear usuario" / "+ Crear user" (en
   `users.tsx` y `dashboard.tsx`) a la nueva ruta.
5. Elimina `create_user.html`, ya consumido por la migración.

Nota sobre el propio `create_user.html`: en un primer intento, el archivo
en disco era una copia idéntica del antiguo `users.html` (mismo listado de
usuarios), sin ningún formulario. Se le pidió al usuario que lo revisara;
el usuario agregó el contenido correcto (el formulario de creación con sus
3 secciones, validaciones y modal de éxito) antes de continuar con esta
migración.

## Antes

- `userCreation.tsx`: un `<main>` vacío, sin formulario ni lógica.
- `admin.routes.tsx`: la ruta `usuarios` tenía un hijo con `index: true`
  que redirigía automáticamente a `crear_usuario`. Esto era un bug: al
  visitar `/admin_panel/usuarios` el usuario habría sido redirigido de
  inmediato a la pantalla de creación, y el propio listado de usuarios
  nunca se habría podido ver (`UsersSection` no tiene un `<Outlet/>` para
  renderizar ese hijo de todas formas).
- Los botones "+ Crear usuario" (en `users.tsx`) y "+ Crear user" (en
  `dashboard.tsx`) eran `<button type="button">` sin ninguna acción.
- `admin.controller.ts` solo tenía las funciones de clases del sidebar y
  `h1Content` (sin el caso para "Crear usuario").
- `create_user.html`: prototipo completo con sidebar/header propios
  (duplicados de los que ya existen como componentes React), un
  `<form>` con validación en JS vanilla (contraseña, confirmación,
  selección de rol) y un modal de éxito simulado.

## Después

### `admin.routes.tsx`

- Se agregó `crearUsuario: \`${ADMIN_PANEL_PATH}/usuarios/crear_usuario\``
  a `ADMIN_PATHS`.
- Se eliminó el `index`/redirect anidado bajo `usuarios` que rompía el
  listado. `usuarios` y `usuarios/crear_usuario` son ahora rutas hermanas
  dentro de `admin_panel`:

  ```
  admin_panel
  ├── (index) → redirect a "dashboard"
  ├── dashboard
  ├── usuarios              → UsersSection (listado, sin cambios de fondo)
  └── usuarios/crear_usuario → UserCreationSection (nuevo)
  ```

### `admin.controller.ts`

- `h1Content` ahora reconoce `ADMIN_PATHS.crearUsuario` y devuelve
  `"Crear usuario"` (se usa en el breadcrumb del `HeaderSection`
  compartido — no se duplicó el breadcrumb propio que traía
  `create_user.html`, porque el layout de `AdminPanel` ya provee uno).
- Se agregaron tipos y datos: `UserRole`, `CreateUserFormState`,
  `PasswordRequirements`, `RoleOption`, `ROLE_OPTIONS` (Operador/
  Supervisor/Administrador, igual que en el prototipo),
  `EMPTY_CREATE_USER_FORM`, y las constantes de longitud
  (`NAME_MIN_LENGTH`, `NAME_MAX_LENGTH`, `PASSWORD_MIN_LENGTH`,
  `PASSWORD_MAX_LENGTH`, `DEFAULT_ROLE`).
- Se agregó toda la lógica de validación y de efectos visuales que en el
  prototipo vivía en el `<script>` embebido, ahora como funciones puras:
  `getPasswordRequirements`, `isPasswordValid`, `doPasswordsMatch`,
  `canSubmitCreateUserForm`, `isCreateUserSubmitDisabled`,
  `getPasswordFieldType`, `getPasswordVisibilityIcon`,
  `getRequirementBadgeClasses`, `getRequirementIconClasses`,
  `getRequirementIcon`, `getMatchIndicatorClasses`, `getMatchIcon`,
  `getMatchLabel`, `getRoleCardClasses`, `getRoleIconBoxClasses`,
  `getRoleRadioOuterClasses`, `getRoleRadioDotClasses`,
  `getRoleTitleClasses`, `getRoleFooterClasses`, `getRoleName`,
  `getNameCounterText`, `getSubmitIcon`, `getSubmitIconClasses`,
  `getSubmitLabel`.
- Se agregó `createUser(payload)`, que simula la llamada al backend
  (no existe todavía una API real en el proyecto — igual que el resto
  de la app, p. ej. el login) resolviendo tras 1200ms, igual que el
  `setTimeout` del prototipo.

### `userCreation.tsx` (reescrito por completo)

- Estructura tomada de `create_user.html`, sección por sección:
  1. **Información del usuario**: nombre completo, correo electrónico.
  2. **Credenciales de acceso**: contraseña (con botón mostrar/ocultar y
     checklist de requisitos en vivo), confirmar contraseña (con
     indicador de coincidencia).
  3. **Rol del usuario**: 3 tarjetas seleccionables (Operador,
     Supervisor —por defecto—, Administrador).
  4. Pie con "Cancelar" (vuelve al listado) y "Crear usuario".
  5. Modal de éxito con resumen del usuario creado y accesos a "Crear
     otro usuario" / "Ver usuarios".
- **No se incluyó el `<aside>`/`<header>` propios del prototipo**: el
  layout persistente de `AdminPanel` (sidebar + header) ya se encarga de
  eso; solo se migró el `<main>` (el contenido específico de esta
  pantalla), igual que se hizo con `dashboard.tsx` y `users.tsx`.
- **Validación/estado**: reemplaza la manipulación directa del DOM
  (`document.getElementById(...).classList...`) del prototipo por
  `useState` + funciones puras del controlador. El componente solo
  decide *qué* mostrar (llama a `getRequirementBadgeClasses(...)`, por
  ejemplo) sin saber *cómo* se calculan esas clases.
- **Botón de enviar deshabilitado** mientras el formulario no sea válido
  (nombre entre 3–50 caracteres, correo no vacío, contraseña que cumpla
  los 5 requisitos, contraseñas coincidentes). El prototipo original no
  bloqueaba realmente el envío (el checklist era solo visual); esto se
  consideró parte de "completar lo que faltaba".
- **`novalidate` del formulario original no se replicó**: se deja la
  validación nativa del navegador (`required`, `type="email"`) activa
  además de la validación propia, en vez de desactivarla.
- **No se replicó el panel de "JSON payload preview"** referenciado en
  el script del prototipo (`jsonPreview`): ese elemento no existía en el
  HTML entregado (referencia rota en el propio prototipo), así que no
  hay nada que migrar ahí.
- **Los campos no vienen prellenados** con los valores de demostración
  del prototipo (`Sofía Valenzuela`, `Telecom2025!`, etc.) — un
  formulario real debe iniciar vacío.
- Navegación con `Link`/`useNavigate` de `react-router` en vez de
  enlaces `href="#"`.

### `users.tsx`

- El botón "+ Crear usuario" pasó de `<button type="button">` (sin
  acción) a `<Link to={ADMIN_PATHS.crearUsuario}>` con las mismas
  clases visuales.

### `dashboard.tsx`

- El botón "+ Crear user" (tarjeta "Acciones rápidas") pasó de
  `<button type="button">` a `<Link to={ADMIN_PATHS.crearUsuario}>`,
  mismas clases. El texto "+ Crear user" se dejó igual (no es un
  detalle de estilo a corregir, solo se conectó la navegación).

### Archivos eliminados

- `src/admin/components/create_user.html` — ya migrado por completo a
  `userCreation.tsx`, sin ninguna referencia restante en el proyecto.

## Actualización posterior: ruteo anidado + solo un botón

Cambio pedido después de la integración inicial: quitar el botón "+ Crear
user" del Dashboard (dejarlo solo en Usuarios), y anidar `crear_usuario`
como hijo de `usuarios` en vez de como ruta hermana.

### `admin.routes.tsx`

`usuarios/crear_usuario` pasó de ser una ruta hermana a un hijo anidado de
`usuarios`:

```
admin_panel
├── (index) → redirect a "dashboard"
├── dashboard
└── usuarios                 → UsersSection
    └── crear_usuario         → UserCreationSection (anidada)
```

`ADMIN_PATHS.crearUsuario` no cambió: las rutas anidadas de React Router
concatenan sus `path`, así que sigue resolviendo a
`/admin_panel/usuarios/crear_usuario`.

### `users.tsx`

Para que la ruta anidada realmente se muestre, `UsersSection` ahora usa
`useOutlet()` de `react-router` y delega por completo cuando hay una ruta
hija activa:

```tsx
const outlet = useOutlet();
if (outlet) {
    return outlet;
}
// ...listado normal de usuarios
```

Sin esto, `usuarios/crear_usuario` habría matcheado la ruta pero
`UserCreationSection` nunca se habría renderizado (`UsersSection` no tenía
ningún `<Outlet/>`). Con este patrón: en `/admin_panel/usuarios` se ve el
listado; en `/admin_panel/usuarios/crear_usuario` se ve *solo* el
formulario de creación (no ambos apilados), sin que el listado y el
formulario compitan por el mismo espacio.

### `dashboard.tsx`

Se eliminó por completo el botón "+ Crear user" de la tarjeta "Acciones
rápidas" (ya no es solo un enlace sin usar — se quitó el elemento entero,
junto con los imports de `Link`/`ADMIN_PATHS` que quedaron sin uso). El
único punto de entrada a la creación de usuario es ahora el botón "+
Crear usuario" en la propia página de Usuarios.

## Verificación

- `tsc -b` y `eslint .` sin errores.
- `vite build` exitoso.
- Comprobado por SSR (`react-dom/server` + `MemoryRouter`, sin necesitar
  un navegador real):
  - `admin.routes.tsx` expone las rutas `dashboard`, `usuarios` y
    `usuarios/crear_usuario` como hermanas (no anidadas/rotas).
  - `h1Content("/admin_panel/usuarios/crear_usuario")` devuelve
    `"Crear usuario"`.
  - El botón de `users.tsx` enlaza a `/admin_panel/usuarios/crear_usuario`.
  - El botón de `dashboard.tsx` enlaza a `/admin_panel/usuarios/crear_usuario`.
  - `UserCreationSection` renderiza el formulario, el botón de envío
    aparece deshabilitado con el formulario vacío, y la tarjeta
    "Supervisor" aparece preseleccionada por defecto.
  - Lógica pura verificada directamente: contraseña débil → inválida,
    contraseña fuerte → válida, coincidencia de contraseñas, y
    `canSubmitCreateUserForm` con formulario vacío (`false`) vs.
    completo y válido (`true`).
