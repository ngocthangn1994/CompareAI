import express from "express";
import routerModel from "./routes/modelRoute";
import compareModelRoute from "./routes/compareRoute";
import scoreRoute from "./routes/scoreRoute";
import cors from "cors";
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The server's running.",
  });
});

app.use("/v1/api", routerModel, compareModelRoute, scoreRoute);

export default app;
