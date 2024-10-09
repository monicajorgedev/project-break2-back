PROJECT BREAK BACK . API TIENDA DE ROPA.

En este proyecto se va a crear un API de una tienda de ropa con un catálogo de productos y un dashboard para el administrador. 

- Paso 1. Inicializamos el proyecto. 
Primero, configuramos nuestro proyecto, le inicializamos e instalamos las dependencias de package.json que vamos a necesitar primero. 

En la terminal escribimos :
npm init -y
npm install express mongoose dotenv

Después creamos los archivos .gitignore  .env
En .gitignore añadimos los archivos que no queramos que se suban de nuestro proyecto.
En .env añadiremos las variables de entorno, el puerto y la URI de Mongo Atlas

- Paso 2. Creamos un servidor http con express en index.js

Añadimos las siguientes lineas para no tener problemas de lectura 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

- Paso 3. Creamos y conectamos a nueva base de datos en Mongo Atlas
Añadimos a .env la MONGO_URI.
y creamos la carpeta config donde ira el archivo db.js con la configuración para la conexión a la base de datos. 

- Paso 4. Creamos el modelo de producto

En la carpeta models creamos el archivo product.js donde crearemos el modelo de producto

- Paso 5. Creamos los controladores 
Creamos las carpeta controllers y dentro el archivo productController.js donde añadiremos los controladores. 
Devuelve la respuesta en formato HTML.

Creamos a su vez la carpeta templates con el archivo templates.js donde van las funciones y variables para crear los html.

- Paso 6. Creamos las rutas. 
Creamos la carpeta routes y dentro el archivo productRoutes.js donde añadiremos las rutas CRUD para los productos. Este llama a los metodos del controlador. 

- Paso 7. Creamos la carpeta public
Añadidos el archivo styles.css donde añadiremos los estilos y la carpeta images donde añadiremos las imagenes de los productos.

- Paso 8. Respuesta en Json. 
Para que los controladores den una respuesta en formato Json, se han modificado y añadido un condicional, donde dependiendo si le pasas un query params ?format=json te devuelve json y en cualquier otro caso te devuelve html.
