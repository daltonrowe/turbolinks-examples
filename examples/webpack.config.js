var path = require("path");
var fs = require("fs");

// Get all files in ./src dir
var directoryPath = path.join(__dirname, "src");
var examplesEntryFiles = fs.readdirSync(directoryPath, function(err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
});

// Filter only .ts, ignore dirs
let filesArray = [];
examplesEntryFiles.forEach(function(file) {
  if (file.indexOf(".ts") > -1) {
    filesArray.push(file);
  }
});

// Format entry point object
let examplesEntryPoints = {};
filesArray.forEach(function(file) {
  examplesEntryPoints[`${file.replace(".ts", "")}`] = "./src/" + file;
});

// Add server code
examplesEntryPoints.server = "./src/server/server.ts";

module.exports = {
  entry: examplesEntryPoints,
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
