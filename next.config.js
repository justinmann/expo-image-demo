const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["react-native", "expo"]);

const nextConfig = withExpo(
  withImages(
    withTM({
      reactStrictMode: true,
      swcMinify: true,
      experimental: {
        forceSwcTransforms: true,
      },
    })
  )
);

module.exports = nextConfig;
