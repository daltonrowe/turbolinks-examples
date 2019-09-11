const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// Serve our example pages as the root
app.use(
  "/",
  express.static(path.join(__dirname, "../pages"), {
    extensions: ["htm", "html"] // Allow use of links without extensions
  })
);

// Serve webpack javascript bundles
app.use("/bundles", express.static(path.join(__dirname, "../dist")));

// Serve Turbolinks source code
app.use(
  "/turbolinks-src",
  express.static(path.join(__dirname, "../../src"), {
    setHeaders: function(res, path, stat) {
      res.set("Content-Type", "text/plain"); // Set headers to text plain for easier frontend
    }
  })
);

// Serve Turbolinks Examples source code
app.use(
  "/turbolinks-examples-src",
  express.static(path.join(__dirname, "../"), {
    setHeaders: function(res, path, stat) {
      res.set("Content-Type", "text/plain"); // Set headers to text plain for easier frontend
    }
  })
);

// Serve files in /pages directory with one second delay
app.use("/slow", function(req, res, next) {
  setTimeout(function() {
    res.sendFile(req.path, { root: path.join(__dirname, "../pages") });
  }, 1000);
});

// Hey, Listen!
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
