import "reflect-metadata";
import express, { Response ,Request, NextFunction} from 'express';
import "express-async-errors"
import createConnection from'./database';
import {router} from "./routes"
import { AppError } from "./errors/AppError";

createConnection()
const app = express();

app.use(express.json())

app.use(router);

app.use((err: Error, request: Request, response: Response , _next: NextFunction)=>{
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    // caso não seja um status App erro
    return response.status(500).json({
        status:"Error",
        message:`Internal server error ${err.message}`
    })
})

export default app;