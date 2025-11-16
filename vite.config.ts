// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 🚀 Добавление переменной для имени репозитория 
// 💡 Замените 'stealth-connect' на точное имя вашего GitHub репозитория
const REPO_NAME = 'stealth-connect'; 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 🔑 КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Настройка базового пути для GitHub Pages
  base: mode === 'production' ? `/${REPO_NAME}/` : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));