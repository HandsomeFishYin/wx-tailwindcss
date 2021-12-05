module.exports = {
  plugins: [
    require("autoprefixer")({
      remove: process.env.UNI_PLATFORM !== "h5",
    }),
    require("tailwindcss")({ config: "./tailwind.config.js" }),
  ],
};
