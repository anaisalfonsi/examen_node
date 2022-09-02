import express from "express";
import router from "./router.js";


const app = express();
const port = 3002;

app.set("view engine", "pug");

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
