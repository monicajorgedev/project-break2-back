# # **PROJECT BREAK BACK . API TIENDA DE ROPA.**

En este proyecto se ha creado una API de una tienda de ropa con un catálogo de productos y un dashboard para el administrador. 

**INSTALACIÓN:**
Lo primero que hay que hacer para que funcione es hacer un npm install pues ya tiene todas las dependencias necesarias. 

Y para arrancar el servidor el comando es npm start.

Este proyecto tiene como variables de entorno una MONGO_URI necesaria para enlazar con la base de datos a MONGO ATLAS,
además  de las variables necesarias para Firebase. 

El modelo del producto tiene el siguiente esquema {name, description, imgUrl, category, size, price}

**DESCRIPCIÓN:**
Las rutas son las siguientes. 
/products es desde el lado público y /dashboard es desde el lado del administrador. 

GET /products: Devuelve todos los productos. Cada producto tiene un enlace a su página de detalle.
GET /products/:productId: Devuelve el detalle de un producto.
GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecen todos los artículos que se han subido. Si clickamos en uno de ellos nos lleva a su página de detalle para poder actualizarlo o eliminarlo.
GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
POST /dashboard: Crea un nuevo producto.
GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
PUT /dashboard/:productId: Actualiza un producto.
DELETE /dashboard/:productId/delete: Elimina un producto.

Esas rutas devuelven una respuesta en HTML.

Respuesta en Json. 
Para que los controladores den una respuesta en formato Json, hay que pasarle un query params ?format=json .

Distribucción de carpetas del proyecto.
- config. Es donde esta los archivos de configuración de la base de datos y de firebase. 
- controllers. Donde están los controlados de autenticación y de producto.
- middlewares. con el archivo checkAuth.js que utilizaremos para checkear si esta logado y dar acceso si procede. 
- models. con el archivo product.js donde esta el esquema del modelo
- public con el archivo styles.css donde están los estilos, la carpeta images donde están las imagenes de los productos y la carpeta utils con el archivo configLogin.js que contiene el script necesario en firebase que usaremos desde el front.
- routes con el archivo authRoutes con las rutas para el login y  el archivo productRoutes.js donde añadiremos las rutas CRUD para los productos. Estos llaman a los metodos de los controladores. 
- templates con el archivo templates.js donde van las funciones y variables para crear los html.
-index.js donde se inicializa el servidor. 


**DOCUMENTACIÓN SWAGGER:**

Nos encontramos con el inconveniente que antes de hacer la autenticación funcionaban las peticiones y después ya no funciona salvo que estes locado. Para poder consultar la documentación con Swagger hay que acceder a la siguiente path: /api-docs

**REGISTRO:**
Para realizar el registro del usuario autorizado hay que acceder a la siguiente path: /register 

**TESTING**
Para ejecutar los test, abrimos la consola y ejecutamos: $ npm run test:watch

