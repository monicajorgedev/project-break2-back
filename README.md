# **PROJECT BREAK BACK . API TIENDA DE ROPA.**

En este proyecto se ha creado una API de una tienda de ropa con un catálogo de productos y un dashboard para el administrador. 

La aplicacion esta desplegada en un entorno productivo en la siguiente url: [https://project-break2-back.onrender.com/](https://project-break2-back.onrender.com/)


## INSTALACIÓN:
Ejecutar los siguientes comandos en la raiz del proyecto:


1. Instalacion de paquetes

```
npm install
```

2. Comando para levantar el servidor 
```
npm start
```

3. Crear fichero `.env` con la siguiente configuracion:

- MONGO_URI: URI para enlazar con la base de datos proporcionada por MONGO ATLAS. 
- PORT: Puerto en el que queremos abrir el proyecto.

Las siguientes variables nos las proporciona Firebase.
- FIREBASE_TYPE
- FIREBASE_PROJECT_ID
- FIREBASE_PRIVATE_KEY_ID
- FIREBASE_PRIVATE_KEY
- FIREBASE_CLIENT_EMAIL
- FIREBASE_CLIENT_ID
- FIREBASE_AUTH_URI
- FIREBASE_TOKEN_URI
- FIREBASE_AUTH_PROVIDER_X509_CERT_URL
- FIREBASE_CLIENT_X509_CERT_URL
- FIREBASE_UNIVERSE_DOMAIN


## DESCRIPCIÓN:

**RUTAS**

Las rutas son las siguientes. 

/products es desde el lado público 
/dashboard es desde el lado del administrador. 

- `GET /products`: Devuelve todos los productos. Cada producto tiene un enlace a su página de detalle.
- `GET /products/:productId`: Devuelve el detalle de un producto.
- `GET /dashboard`: Devuelve el dashboard del administrador. En el dashboard aparecen todos los artículos que se han subido. 
Si clickamos en uno de ellos nos lleva a su página de detalle para poder actualizarlo o eliminarlo.
- `GET /dashboard/new`: Devuelve el formulario para subir un artículo nuevo.
- `POST /dashboard`: Crea un nuevo producto.
- `GET /dashboard/:productId`: Devuelve el detalle de un producto en el dashboard.
- `GET /dashboard/:productId/edit`: Devuelve el formulario para editar un producto.
- `PUT /dashboard/:productId`: Actualiza un producto.
- `DELETE /dashboard/:productId/delete`: Elimina un producto.

**RESPUESTAS**

Esas rutas devuelven una respuesta en HTML.

Respuesta en Json:   Para que los controladores devuelvan una respuesta en formato JSON, hay que pasarle un query params ?format=json .



**DISTRIBUCIÓN DE CARPETAS DEL PROYECTO.**

- config. Es donde esta los archivos de configuración de la base de datos y de firebase. 
- controllers. Donde están los controlados de autenticación y de producto.
- middlewares. Con el archivo checkAuth.js que utilizaremos para checkear si esta logado y dar acceso si procede. 
- models. Con el archivo product.js donde esta el esquema del modelo
- public. Con el archivo styles.css donde están los estilos, la carpeta images donde están las imagenes de los productos y la carpeta utils con el archivo configLogin.js que contiene el script necesario en firebase que usaremos desde el front.
- routes. Con el archivo authRoutes con las rutas para el login y  el archivo productRoutes.js donde añadiremos las rutas CRUD para los productos. Estos llaman a los metodos de los controladores. 
- templates. Con el archivo templates.js donde van las funciones y variables para crear los html.
-index.js. Donde se inicializa el servidor. 


## DOCUMENTACIÓN SWAGGER:

Nos encontramos con el inconveniente que antes de hacer la autenticación funcionaban las peticiones y después ya no funciona salvo que estes autenticado. Para poder consultar la documentación con Swagger hay que acceder a la siguiente URL `http://localhost:<PORT>/api-docs`

## REGISTRO:
Para realizar el registro del usuario autorizado hay que acceder a la siguiente url: `http://localhost:<PORT>/register`

## TESTING

Ejecutar test. 
````
npm test
````


