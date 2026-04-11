import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "vue",
        "@libretexts/davis-core",
        "@libretexts/davis-vue",
        "@tanstack/vue-table",
        "@tanstack/vue-virtual",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
      ],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
});
