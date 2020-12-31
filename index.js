require("dotenv").config();
const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 3300;
const es6Renderer = require("express-es6-template-engine");
const app = express();
const serve = http.createServer(app);
const morgan = require("morgan");
const helmet = require("helmet");

const logger = morgan("tiny");
app.use(express.static("public"));
/*Needed in order to use req.body data*/
app.use(express.urlencoded({ extended: true }));
/*----------------------------------------*/
app.use(helmet());
app.use(logger);

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

//Needed for Sessions
const session = require('express-session');
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(),  // no options for now
    secret: 'asdfasdfasdfsafsafsafdasdfasdf3', // will need to be changed to  `process.env.SESSION_SECRET,` and a SESSION_SECRET added to the .env
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(require("./routes"));
// app.use(require("./models"));
// app.use(require("./controllers/controller"));

serve.listen(port, hostname, () => {
  console.log(`Running on port http://${hostname}:${port}`);
});
