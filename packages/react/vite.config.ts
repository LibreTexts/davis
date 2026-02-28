import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "index.standalone": resolve(__dirname, "src/index.standalone.ts"),
      },
      name: "DavisReact",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        format === "es" ? `${entryName}.mjs` : `${entryName}.cjs`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@headlessui/react", "tailwindcss"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "styles.css";
          }
          return "[name][extname]";
        },
      },
    },
  },
});
