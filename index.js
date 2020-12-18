const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 3300;
const es6Renderer = require("express-es6-template-engine");
const app = express();
const serve = http.createServer(app);
const morgan = require("morgan")
const helmet = require("helmet")

const logger = morgan('tiny')
app.use(express.static("public"))
app.use(helmet())
app.use(logger)

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(express.urlencoded({extended: true}));

app.use(require("./routes"));
app.use(require("./models"));
app.use(require("./controllers"));

serve.listen(port, hostname, () => {
  console.log(`Running on port http://${hostname}:${port}`);
});
