import { ValidationError } from "express-validation";

function handleError(error:any, req:any, res:any, next:any) {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }

    return res.status(500).json(error);
}

export default handleError;