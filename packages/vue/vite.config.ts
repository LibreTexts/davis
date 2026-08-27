import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "vue",
        "@headlessui/vue",
        "@floating-ui/dom",
        "@libretexts/davis-core",
        "tailwindcss",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
