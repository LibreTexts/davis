module.exports = {
  plugins: {
    'postcss-import': {
      resolve: (id, basedir) => {
        // Handle node_modules imports (e.g., @libretexts/davis-core/base.scoped.css)
        if (!id.startsWith('.') && !id.startsWith('/')) {
          try {
            return require.resolve(id, { paths: [basedir] });
          } catch {
            return id;
          }
        }
        return id;
      },
    },
    tailwindcss: { config: './tailwind.standalone.config.js' },
    autoprefixer: {},
  },
};
