import express, { json, urlencoded } from "express";
import faker from 'faker';
import morgan from "morgan";
import cors from "cors";
import globalErrorHandler from "./middleware/errors/globalErrorHandler";
import { routes } from "./routes";
import db from "./config/database";
import insertData from './models/model1'


const app = express();
const PORT = process.env.PORT || 3000
app.use(json(), urlencoded({ extended: false }), morgan("dev"), cors());
app.use("/v1", routes(express));
insertData()
  .then(() =>
    db.run(`INSERT INTO table1 (name, email) VALUES (?,?)`, [
      "admin",
      faker.internet.email(),
    ])
  )
  .catch((err) => console.log(err));

app.use(globalErrorHandler);
app.listen(PORT, (err)=> {
    if (err) {
        throw new Error('An error occured', err);
    }
    console.log(`Server is running on port ${PORT}`)
})