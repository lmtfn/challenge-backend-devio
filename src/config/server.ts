import cors from 'cors';
import express from 'express';
import handleError from '../middleware/handleError';
import routes from '../routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleError);

export default app;
