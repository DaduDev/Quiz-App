const path = require("path");

module.exports = {
  // Entry point for your application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
  },

  // Module loaders for different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
        exclude: /node_modules/, // Excludes node_modules folder
        use: {
          loader: "babel-loader", // Uses Babel loader for transpiling
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"], // Uses style-loader and css-loader for CSS processing
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rule for images
        use: {
          loader: "file-loader", // Uses file-loader to handle image imports
          options: {
            name: "[name].[ext]", // Preserves original filename and extension
          },
        },
      },
    ],
  },

  // Resolves paths for modules
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      util: require.resolve("util/"),
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url/"),
    },
  },

  // Optional: Development server configuration (for hot reloading)
  devServer: {
    contentBase: path.join(__dirname, "public"), // Serves content from the public folder
    port: 3000, // Port for the development server
    hot: true, // Enables hot module replacement
  },
};
