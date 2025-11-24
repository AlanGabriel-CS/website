// Try to use the Tailwind v4 PostCSS adapter if available, otherwise fall back
// to the Tailwind v3 object-form config. This makes the config resilient to
// different installed Tailwind versions.
// PostCSS config: use the @tailwindcss/postcss adapter package as the plugin key.
// This matches the new PostCSS plugin package and avoids the "using tailwindcss
// directly as a PostCSS plugin" error.
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
