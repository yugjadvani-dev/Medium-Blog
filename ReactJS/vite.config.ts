import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@useEffectVSuseQuery": path.resolve(
        __dirname,
        "./src/useEffectVSuseQuery"
      ),
    },
  },
  plugins: [react()],
});
