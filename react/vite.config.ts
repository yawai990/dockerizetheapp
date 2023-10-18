import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //need for the docker port mapping to work
    strictPort: true,
    port: 8000,
  },
});
