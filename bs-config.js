const { notify } = require("browser-sync");

module.exports = {
  ui: {
    port: 3001,
  },
  port: 3000,
  files: ["index.php", "./src/**/*.{php,js}", "./public/**/*.{css,js}"],
  ignore: ["node_modules/**/*", ".gitignore"],
  proxy: "dev.practise-php.io:8080",
  injectChanges: true,
  browser: "google chrome",
  notify: true,
};
