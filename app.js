import express from "express";
import "express-async-errors";
import cors from 'cors'

const app = express();
/* Imports from another files  */
import NewsRoutes from './Routes/route.js'
import NotFound from "./Errors/notFound.js";
import ErrorHandlerMiddleware from "./Errors/CustomError.js";


/* Middlewares  */
app.use(
  cors({
    origin:'http://localhost:3000'
    // origin: "https://daily-spark.vercel.app",
  })
);
app.use('/api/v1/news', NewsRoutes)


app.get("/", (req, res) => {
  res.send("Welcome to the app");
})

// Error Handling
app.use(NotFound)
app.use(ErrorHandlerMiddleware)


/* starter function to start the server */
const PORT = 4000

const start = () =>  {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
}

start()
