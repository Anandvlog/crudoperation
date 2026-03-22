# CRUD Operation

A small React app for practicing **Create, Read, Update, and Delete** on a simple “people” list: a form adds or updates rows, and a table shows every record with edit and delete actions. Styling uses **Tailwind CSS**; the form is wired with **react-hook-form**.

## Demo video

Screen recording of the CRUD flow (add, edit, delete, table updates):

Domain link:- https://curd-smoky.vercel.app/ 

- **Open or download:** [`public/crudoperation .mp4`](./public/crudoperation%20.mp4)  
  (The filename contains a space; the link uses `%20` so it works in Markdown and browsers.)

If your Markdown viewer supports HTML, you can embed the same file like this (paths are relative to this README at the repo root):

```html
<video controls playsinline width="100%" style="max-width: 720px;">
  <source src="./public/crudoperation%20.mp4" type="video/mp4" />
  <a href="./public/crudoperation%20.mp4">Open demo video</a>
</video>
```

**GitHub tip:** On [github.com](https://github.com), README previews often need an absolute **raw** URL for `<video>` to play. After you push the repo, use:

`https://raw.githubusercontent.com/<your-username>/<your-repo>/<branch>/public/crudoperation%20.mp4`

Replace `<your-username>`, `<your-repo>`, and `<branch>` (for example `main`). The Markdown link above still works to open the file from the repository browser.

## Features

- Add a person (first name, last name) with basic validation  
- Table lists all rows with row numbers  
- **Edit** loads the row into the form; **Update** saves changes  
- **Delete** removes a row (and cancels edit if that row was active)  
- Data is kept in **React state** (in-memory for the session)

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vite.dev/)  
- [React Router](https://reactrouter.com/)  
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)  
- [react-hook-form](https://react-hook-form.com/)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Project layout (high level)

- `src/pages/Home.tsx` — CRUD form and table  
- `src/components/Header.tsx` — navigation  
- `src/components/Layout.tsx` — wraps pages with header and footer  
- `public/` — static assets, including the demo `.mp4`

---

Built as a learning exercise for CRUD UI patterns in React.
