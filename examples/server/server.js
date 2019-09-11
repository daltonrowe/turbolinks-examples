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

// Serve turbolinks source code
app.use(
  "/turbolinks-src",
  express.static(path.join(__dirname, "../../src"), {
    setHeaders: function(res, path, stat) {
      res.set("Content-Type", "text/plain"); // Set headers to text plain for easier frontend
    }
  })
);

// Serve turbolinks source code
app.use(
  "/turbolinks-src",
  express.static(path.join(__dirname, "../../src"), {
    setHeaders: function(res, path, stat) {
      res.set("Content-Type", "text/plain"); // Set headers to text plain for easier frontend
    }
  })
);

app.use("/slow", function(req, res, next) {
  setTimeout(function() {
    res.sendFile(req.path, { root: path.join(__dirname, "../pages") });
  }, 1000);
});

// Hey, Listen!
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
