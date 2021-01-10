require("dotenv").config();
const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 5002;
const es6Renderer = require("express-es6-template-engine");
const app = express();
const serve = http.createServer(app);
const morgan = require("morgan");
const helmet = require("helmet");

const logger = morgan("tiny");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(logger);

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

//Needed for Sessions
const session = require("express-session");
const FileStore = require("session-file-store")(session);
app.use(
  session({
    store: new FileStore(), // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(require("./routes"));
// app.use(require("./models"));
// app.use(require("./controllers/controller"));

serve.listen(port, hostname, () => {
  console.log(`Running on port http://${hostname}:${port}`);
});
