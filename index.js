const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 3300;
const app = express();
const serve = http.createServer(app);

app.use(require("./routes"));
app.use(require("./models"));
app.use(require("./controllers"));

serve.listen(port, hostname, () => {
  console.log(`Running on port http://${hostname}:${port}`);
});
