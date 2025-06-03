import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  root: "./src", // so Vite treats ./src as project root, index.html should be inside src/
  base: "./",    // relative base path (good for static hosting)
  build: {
    outDir: "../dist/public",
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "localhost",
      ".replit.dev",
      "25b3cec7-b6b2-48b7-a8f4-7ee8a9c12574-00-36vzyej2u9kbm.kirk.replit.dev",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
});
