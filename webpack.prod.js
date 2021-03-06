const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "production",
  target: "web",
  cache: false,
  devtool: false,
  optimization: {
    minimize: true
  },
  output: {
    publicPath: "https://webpack-module-federation-poc-remote-1.netlify.app/",
    // publicPath: "http://localhost:8081/"",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@pages": path.resolve(__dirname, "src/pages/")
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./register": "./src/register"
      },
      shared: {
        "react": {
          singleton: true,
          requiredVersion: deps["react"]
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"]
        },
        "react-router-dom": { 
          singleton: true,
          requiredVersion: deps["react-router-dom"]
        },
        "@sharegate/orbit-ui": {
          singleton: true,
          requiredVersion: deps["@sharegate/orbit-ui"]
        }
      }
    })
  ]
};
