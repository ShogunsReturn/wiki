export default function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [require("@tailwindcss/postcss")];
      return postcssOptions;
    },
  };
};