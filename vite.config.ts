import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// NOTE: "base" must match your GitHub repository name exactly.
// If your repo is https://github.com/Riyukhari06/arief-portfolio
// then base should be '/arief-portfolio/'.
// If you deploy to a user/organization page (Riyukhari06.github.io), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
