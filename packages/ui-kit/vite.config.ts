import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  css: {
    // Override PostCSS to avoid picking the root Tailwind config during library build
    postcss: { plugins: [] },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UIKit",
      fileName: (format) => `ui-kit.${format === "es" ? "es" : "umd.cjs"}`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
