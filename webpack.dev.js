const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const deps = require("./package.json").dependencies;

const LOCAL = process.env.LOCAL === "true";

const PORT = 8081;

module.exports = {
  mode: "development",
  target: "web",
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    // Otherwise hot reload in the host failed with a CORS error
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
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
    !LOCAL && new ModuleFederationPlugin({
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
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ].filter(Boolean)
};
