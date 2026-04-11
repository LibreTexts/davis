import { defineConfig, Plugin } from "vite";
import { resolve } from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";

// Plugin to preserve "use client" directives
function preserveDirectives(): Plugin {
  return {
    name: "preserve-directives",
    enforce: "post",
    generateBundle(_options, bundle) {
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "chunk") {
          const facadeModuleId = chunk.facadeModuleId;
          if (facadeModuleId) {
            try {
              const sourceCode = fs.readFileSync(facadeModuleId, "utf-8");
              const firstLine = sourceCode.split("\n")[0].trim();
              if (firstLine === '"use client";' || firstLine === "'use client';") {
                chunk.code = '"use client";\n' + chunk.code;
              }
            } catch {
              // ignore
            }
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      name: "DavisReactTable",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        format === "es" ? `${entryName}.mjs` : `${entryName}.cjs`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@headlessui/react",
        "@libretexts/davis-core",
        "@libretexts/davis-react",
        "@tanstack/react-table",
        "@tanstack/react-virtual",
        "tailwindcss",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
      ],
      plugins: [preserveDirectives()],
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
        },
      ],
    },
  },
});
