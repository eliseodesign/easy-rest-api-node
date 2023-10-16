import dotenv from 'dotenv';
import { app } from './src/app.js'; // importar la app

dotenv.config(); // importar varaibles de entorno

const PORT = process.env.PORT || 3001; // buscar el puerto en .env

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
