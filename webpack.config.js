const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const path = require("path");
const { env } = require("process");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2020",
        },
      },
      {
        test: /\.(gif|jpg|png|webp|svg|mp4)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
      },
    ],
  },
  output: {
    filename: "js/[name]-[chunkhash].js",
    assetModuleFilename: "asset/[hash][ext][query]",
    path: __dirname + "/dist",
    clean: true,
    // publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
    // !env.WEBPACK_SERVE
    //   ? new BundleAnalyzerPlugin({
    //       analyzerMode: "static",
    //       openAnalyzer: false,
    //     })
    //   : null,
  ],
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    open: true,
  },
  devtool: env.WEBPACK_SERVE ? "eval-cheap-module-source-map" : false,
  // // 빌드 캐시 최적화
  cache: {
    type: env.WEBPACK_SERVE ? "memory" : "filesystem",
  },
};
