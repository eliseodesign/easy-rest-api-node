import express from "express" 
import userRoutes from './routes/users.routes.js' // importar rutas de src/routes
export const app = express();

app.use(express.json()); // usar jsons

app.use("/api/user", userRoutes) // usar rutas
