// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Public canonical origin — drives sitemap + canonical URLs. Update to the
  // real production domain at cutover.
  site: "https://davis.libretexts.org",
  // Static output — deploys to Cloudflare Pages (or any CDN) as plain assets.
  output: "static",
  integrations: [
    // Both renderers are active so a single MDX page can mount live React AND
    // Vue islands — the capability a React-only Next.js site cannot provide.
    react(),
    vue(),
    starlight({
      title: "Davis",
      description:
        "An accessibility-first design system for React and Vue by LibreTexts.",
      logo: { src: "./src/assets/logo.svg", replacesTitle: false },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/LibreTexts/davis",
        },
      ],
      customCss: ["./src/styles/docs.css"],
      // Point readers at the workshop for exhaustive interactive states.
      editLink: {
        baseUrl:
          "https://github.com/LibreTexts/davis/edit/main/packages/docs-next/",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Overview", link: "/getting-started/overview/" },
            { label: "Installation", link: "/getting-started/installation/" },
          ],
        },
        {
          // Hand-authored, narrative content — principles, history, conventions.
          label: "About",
          items: [
            { label: "Design Principles", link: "/about/principles/" },
            { label: "History", link: "/about/history/" },
            { label: "Conventions", link: "/about/conventions/" },
          ],
        },
        {
          label: "Components",
          items: [{ label: "Button", link: "/components/button/" }],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
