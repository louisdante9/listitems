import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import globalErrorHandler from "./middleware/errors/globalErrorHandler";
import { routes } from "./routes";
import database from './config/database'



const app = express();
const PORT = process.env.PORT || 3000
app.use(json(), urlencoded({ extended: false }), morgan("dev"), cors());

app.use("/v1", routes(express));

app.use(globalErrorHandler);
app.listen(PORT, (err)=> {
    if (err) {
        throw new Error('An error occured', err);
    }
    console.log(`Server is running on port ${PORT}`)
})