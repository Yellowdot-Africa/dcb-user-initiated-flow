import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: '/?ctx=subscribe&service=y_dot_tv&mno=telkom&country=za', // 👈 this makes it default URL
  },
})
