const http = require("http");
const express = require("express");
const hostname = "localhost";
const port = 3300;
const app = express();

const serve = http.createServer(app);

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Home Page of your Future!</h1>
    `);
});

app.get("*", (req, res) => {
  res.send("404 Error: Page Does Not Exist");
});

serve.listen(port, hostname, () => {
  console.log(`Running on port http://${hostname}:${port}`);
});
