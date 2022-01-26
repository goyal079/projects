import express from "express";
import config from "config";
const app = express();
const port = process.env.PORT || config.get("port");

// import connect function
import "./connect.js";
// import routers
import userRouter from "./controllers/user/index.js";
import todoRouter from "./controllers/todos/index.js";
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/todos", todoRouter);

app.listen(port, (req, res) => {
  console.log("Server started at port ", port);
});
