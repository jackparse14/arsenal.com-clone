import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const __dirname = fileURLToPath(import.meta.url);
const staticHandler = express.static(path.join(__dirname, "public"));
const bodyParser = express.urlencoded();

//  Middleware
app.use(staticHandler);

app.get("/", (req, res) => {
  res.send("hell0");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
