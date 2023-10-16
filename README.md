## Para usar

Primero instala las dependencias con:

`npm install`

Puedes crear un archivo .env en la raiz del proyecto y poner ahi tu PORT, hay un ejemplo en el .env.example

Ahora puedes ejecutar el proyecto con:

`npm run dev`

## Estructura de Carpetas
```
|_ data/
|  |_ usuarios.json   # Archivo de datos de usuarios
|
|_ src/
|  |_ routes/
|  |  |_ user.routes.js   # Rutas relacionadas con usuarios
|  |
|  |_ app.js   # Configuración principal de la aplicación
|
|_ index.js   # Archivo principal para iniciar la aplicación
```

En esta estructura, se pueden encontrar los archivos de datos, las rutas relacionadas con los usuarios y la configuración principal de la aplicación en las carpetas correspondientes. Luego, el archivo `index.js` se utiliza para iniciar la aplicación y poner en funcionamiento el servidor.