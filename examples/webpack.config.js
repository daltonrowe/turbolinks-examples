var path = require("path");

var fs = require("fs");
var directoryPath = path.join(__dirname, "src");
var examplesEntryFiles = fs.readdirSync(directoryPath, function(err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  let filesArray = [];
  files.forEach(function(file) {
    filesArray.push(file);
  });

  return filesArray;
});

console.log(examplesEntryFiles);
let examplesEntryPoints = {};
examplesEntryFiles.forEach(function(file) {
  examplesEntryPoints[`${file.replace(".ts", "")}`] = "./src/" + file;
});

console.log(examplesEntryPoints);

module.exports = {
  // Change to your "entry-point".
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
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
