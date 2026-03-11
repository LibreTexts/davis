import { defineConfig, Plugin } from "vite";
import { resolve } from "path";
import fs from "fs";
import path from "path";

// Plugin to preserve "use client" directives
function preserveDirectives(): Plugin {
  return {
    name: "preserve-directives",
    enforce: "post",
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === "chunk") {
          // Get the source file path
          const facadeModuleId = chunk.facadeModuleId;
          if (facadeModuleId) {
            try {
              const sourceCode = fs.readFileSync(facadeModuleId, "utf-8");
              const firstLine = sourceCode.split("\n")[0].trim();

              // Check if the source file has "use client" directive
              if (firstLine === '"use client";' || firstLine === "'use client';") {
                // Prepend "use client" to the output
                chunk.code = '"use client";\n' + chunk.code;
              }
            } catch (e) {
              // Ignore errors reading source files
            }
          }
        }
      }
    },
  };
}

export default defineConfig({
  build: {
    emptyOutDir: false,
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
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@headlessui/react",
        "tailwindcss",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
        "@libretexts/davis-core",
      ],
      plugins: [preserveDirectives()],
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "styles.css";
            }
            return "[name][extname]";
          },
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "styles.css";
            }
            return "[name][extname]";
          },
        },
      ],
    },
  },
});
