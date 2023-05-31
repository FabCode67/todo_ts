import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import dotenv from "dotenv"

const app: Express = express();

const PORT: string | number = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(todoRoutes);
dotenv.config()

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rdx5pkn.mongodb.net/?retryWrites=true&w=majority`;

// const options: ConnectOptions = {
//   useUnifiedTopology: true,
//   useFindAndModify: false, // Correct casing for useFindAndModify
// };

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error);
    
    throw error;
  });
