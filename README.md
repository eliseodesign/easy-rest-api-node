## Para usar

Primero instala las dependencias con:

```bash
npm install
```

Puedes crear un archivo .env en la raiz del proyecto y poner ahi tu PORT, hay un ejemplo en el .env.example

Ahora puedes ejecutar el proyecto con:

```bash
npm run dev
```


## Estructura de Carpetas
```
|_ data/
|  |_ usuarios.json
|
|_ src/
|  |_ routes/
|  |  |_ user.routes.js
|  |
|  |_ app.js  
|
|_ index.js   
|_ .env  
```

- **data/usuarios.json** Archivo de datos de usuarios
- **src/** carpeta con el codigo fuente
- **src/routes/** carpeta con archivos que manejan las rutas
- **src/app**.js archivo de configuración principal
- **index.js** archivo que levanta el servidor
- **.env** varaibles de entorno

