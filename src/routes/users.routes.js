import { Router } from 'express'; 
const router = Router(); // Router de express
import fs from 'fs'; // file system
import path from 'path'; // rutas de directorio

// concatenar la ruta raiz con el archivo usuarios.json
const usuariosFilePath = path.join(process.cwd(), 'data', 'usuarios.json');

// Ruta GET para obtener todos los usuarios
router.get('/', (req, res) => {
  const usuarios = obtenerUsuarios();
  res.json(usuarios);
});

// Ruta POST para agregar un nuevo usuario
router.post('/', (req, res) => {
  const nuevo = req.body;
  guardarUsuario(nuevo);
  res.json({ message: 'Usuario agregado con éxito' });
});

function obtenerUsuarios() {
  try {
    const contenido = fs.readFileSync(usuariosFilePath, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    console.error('Error al leer el archivo de usuarios:', error);
    return [];
  }
}

function guardarUsuario(usuario) {
  try {
    const contenidoActual = obtenerUsuarios();
    const todosLosIds = contenidoActual.map((user) => user.id) // seleccionar los ids del array
    const nuevoId = Math.max(...todosLosIds, 0) + 1; // el idMax + 1 es el nuevo Id

    const nuevoUsuario = { id: nuevoId, ...usuario }; // creamos el usuario
    const nuevosUsuarios = [...contenidoActual, nuevoUsuario];
    fs.writeFileSync(usuariosFilePath, JSON.stringify(nuevosUsuarios, null, 2));
  } catch (error) {
    console.error('Error al guardar el nuevo usuario:', error);
  }
}

export default router;
