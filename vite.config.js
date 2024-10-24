import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // opens the browser when running `npm run dev`
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
});
