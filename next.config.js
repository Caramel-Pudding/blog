const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /.*/,
			contextRegExp: /__tests__/,
    }));
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
