const path = require("path");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

const absoluteImport = () => {
  return Object.assign(
    {},
    {
      webpack(config, options) {
        config.resolve.alias["components"] = path.join(__dirname, "components");
        config.resolve.alias["utils"] = path.join(__dirname, "utils");
        return config;
      }
    }
  );
};

module.exports = withSass(withCss(absoluteImport()));
