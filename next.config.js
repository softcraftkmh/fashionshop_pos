const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
module.exports = withSass(withCss());
