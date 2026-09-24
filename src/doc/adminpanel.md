# Admin Panel — HTML → SPA migration

## What was done

The admin dashboard used to be a static prototype at
`src/admin/admin.html` (a full standalone `<html>` document built with
the Tailwind CDN build). It has been fully migrated into the React SPA:

- **`src/admin/components/mainContent.tsx`** (new) — the prototype's
  `<main>` block (greeting/status row, the 4 KPI cards, the "Usuarios
  por rol" donut + legend, "Acciones rápidas", and the recent-users
  table) ported to JSX as `MainContentSection`. Markup, classes and
  copy were kept 1:1; only changes required for valid JSX were made
  (`class` → `className`, `style="width: 72%"` → `style={{ width:
  "72%" }}`, `disabled=""` → `disabled`). `stroke-width` /
  `stroke-linecap` / `stroke-linejoin` on the inline SVGs were left
  un-camelCased to match the convention already used in
  `header.tsx` / `sidebar.tsx`.
- **`src/admin/adminPanel.tsx`** — now renders `<MainContentSection />`
  instead of an empty `<main>`.
- **`tailwind.config.js`** — added the `brand` color scale (`50`–`900`)
  that used to live only in `admin.html`'s inline
  `tailwind.config = {...}` script. Without it, classes like
  `bg-brand-800` used throughout the header/sidebar/dashboard have no
  matching utility.
- **`src/style/index.css`** — migrated the two global `<style>` blocks
  from `admin.html`'s `<head>` that had no other home: the `Inter`
  body font-family, and the custom scrollbar styling
  (`::-webkit-scrollbar*`).
- **`src/admin/admin.html`** — deleted. Its content is now fully
  represented in TSX and it was not referenced anywhere in the build.

No `*.controller.ts` was added for the admin panel: the original
`admin.html` main content had no interactive JS (`togglePasswordVisibility`
/ `handleFormSubmit`-style logic lives only in `src/login/login.controller.ts`
for the login page). The dashboard's buttons/table are static, so there
was nothing to extract into a controller.

## Why `<body>` became `<div>` in `adminPanel.tsx`

The prototype's root element was `<body class="h-full flex overflow-hidden ...">`,
so the first migration pass kept that literally:

```tsx
export const AdminPanel = () => (
  <body className="h-full flex overflow-hidden ...">
    <SidebarSection />
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <HeaderSection />
      <MainContentSection />
    </div>
  </body>
);
```

This rendered inside React's tree, which is itself mounted into
`#root`, which lives inside the page's *real* `<body>` (from
`index.html`). That means the browser has to parse a `<body>` tag
while it's already inside a `<body>` element.

Per the HTML parsing spec, that's not allowed: a second `<body>` start
tag is not turned into a new element — the parser just copies any new
attributes onto the *existing* `<body>` and otherwise ignores the tag.
So the `<div>`/`<aside>` children of `AdminPanel`'s "body" ended up
attached directly to the page's real `<body>`, **without the `flex`
wrapper around them**. The result: the sidebar and the
header/content column lost their side-by-side flex layout and simply
stacked as normal block elements — sidebar on top, header/content
below it — instead of sitting next to each other.

The fix was to render a plain `<div>` with the same classes instead of
`<body>`:

```tsx
<div className="h-full flex overflow-hidden ...">
  <SidebarSection />
  <div className="flex-1 flex flex-col h-full overflow-hidden">
    <HeaderSection />
    <MainContentSection />
  </div>
</div>
```

A `<div>` is a completely ordinary element wherever it appears, so it
actually gets inserted into the DOM and keeps the `flex` layout
working exactly as designed. Visually nothing changes (same classes,
same box), which is why this could be fixed without touching any
Tailwind class or design detail.

### The related height-chain fix

`h-full` (`height: 100%`) only works if every ancestor up to the
viewport has a resolved height. `index.html` never set a height on
`html`/`body`, and `#root` (where React mounts) had no height either,
so even after switching to `<div>`, the `h-full` chain used throughout
`adminPanel.tsx` had nothing to resolve against. This was added to
`src/style/index.css`:

```css
html, body, #root {
  height: 100%;
}
```

This establishes the missing height chain app-wide without changing
any component's classes.
