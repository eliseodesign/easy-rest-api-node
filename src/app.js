import express from "express" 
import userRoutes from './routes/users.routes.js'
export const app = express();

app.use(express.json()); // usar jsons

app.use("/api/user", userRoutes)
