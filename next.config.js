module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/u,
      use: [options.defaultLoaders.babel, { loader: "graphql-tag/loader" }],
    });
    return config;
  },
};
