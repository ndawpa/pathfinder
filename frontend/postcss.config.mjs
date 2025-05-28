// @ts-check

/** @type {import('postcss-load-config').ConfigFn} */
module.exports = () => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
};
