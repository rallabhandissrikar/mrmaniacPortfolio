# MR. MANIAC — Portfolio (React + Tailwind + Supabase)

Neon-themed personal portfolio built with React and TailwindCSS. Dark UI with neon-green accents, gradient "breathing" boxes and minimal, hacker-studio style layout.

Quick summary
- Framework: React
- Styling: TailwindCSS (custom neon utilities)
- Auth & data: Supabase (Projects table)
- Key pages: Home, Admin (CMS-like editing), Projects list
- Components: TypingText, SectionDivider, Modal (reusable neon modal)

Getting started (local)
1. Install
   - npm install
   - or yarn

2. Environment
   - Create a local env file or configure utils/supabase with your Supabase credentials.
   - Example (.env.local or follow your utils/supabase setup):
     - REACT_APP_SUPABASE_URL=your-supabase-url
     - REACT_APP_SUPABASE_ANON_KEY=your-anon-key
   - Ensure the supabase client in `src/utils/supabase` reads these values.

3. Run
   - npm start         # for CRA
   - or npm run dev    # for Vite (if applicable)
   - npm run build     # build for production

Database notes
- Table: `Projects`
- Expected columns (used in UI): id, name, tools (or stack), desc (description), l_d (live demo), github
- Admin page requires Supabase auth to sign in and manage projects.

Key features
- Home: hero, about, stack, and sample projects with [SEE MORE PROJECTS].
- Admin: paginated project listing, edit/delete/add (Supabase-backed).
- Modal: reusable neon "breathing" gradient modal used across the UI. Fixed-size modal with hidden scrollbar and centered overlay.

Project structure (high level)
- src/
  - pages/
    - Home.jsx        — landing page and sample projects
    - Admin.jsx       — admin CRUD UI for projects
  - components/
    - Modal.jsx       — neon modal component
    - TypingText.jsx
    - SectionDivider.jsx
  - utils/
    - supabase.js     — Supabase client (configure with env vars)
  - index.css         — global styles + custom scrollbar-hide utility

Deployment
- Vercel config exists (vercel.json) — adjust rewrites if necessary.
- Ensure environment variables are set in the hosting provider (Supabase keys).

Tips & notes
- Tailwind utilities like `breathing-gradient` and `neon-glow` are used across the site — check `index.css` or tailwind config for definitions.
- Admin auth relies on Supabase; no password is stored client-side. If login issues arise, verify Supabase settings and redirect URIs.
- Modal styling matches the site's neon green theme and is intentionally opaque to preserve contrast.

Contributing
- Keep styles consistent (neon green: #00FF99). Follow component patterns in `src/components`.
- Open an issue or PR for improvements (components, accessibility, performance).

License & Contact
- Add your preferred license file (e.g., MIT) if you want to open-source.
- Contact: add your email/links in the repo or on the site header/footer.

Enjoy the neon — concise, minimal, and engineered to be sharp.
