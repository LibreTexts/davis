import withMarkdoc from "@markdoc/next.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.libretexts.net",
        port: "",
      },
    ],
  },
};

export default withMarkdoc({ schemaPath: "./src/markdoc" })(nextConfig);
