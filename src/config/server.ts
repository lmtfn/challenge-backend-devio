import express from "express";
import routes from "../routes";
import cors from "cors";
import handleError from"../middleware/handleError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleError);

export default app;