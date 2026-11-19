import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Lugx-gaming-REACT-landingpage-template/',
  plugins: [react(), tailwindcss()],
})
