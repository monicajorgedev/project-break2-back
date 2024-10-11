const Product = require('../models/Product');


const baseHtmlInit = `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Monique's Shop</title>
                        <link rel="stylesheet" href="/styles.css">
                    </head>
                    <body>`;
                    
const baseHtmlEnd = `</body><footer> </footer></html>`;


const getProductCards = (products, user) => {
    let html = '';
    for (let product of products) {
      html += `
        <div class="product-card">
          <img src="${product.imgUrl}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>${product.price}€</p>
          <a href="${user ? `/dashboard/${product._id}`: `/products/${product._id}`}">Ver detalle</a>
        </div>
      `;
    } 
    return html;
}

const getProductDetail = (product, user) => {
    let html = '';
    
      html = `
        <div class="product-card">
          <h2>${product.name}</h2>
          <img src="${product.imgUrl}" alt="${product.name}">
          <p>${product.description}</p>
          <p>${product.price}€</p>
          <p>Categoria: ${product.category}</p>
          <p>Talla: ${product.size}</p>
          ${user ? `<a href="/dashboard/${product._id}/edit">Editar</a>
            <a href="/dashboard/${product._id}/delete">Borrar</a>`: ''}
        </div>
      `;
    return html;
}

const getProductForm = (product) => {
    const form = `
    <div class="formulario">
    <h2>Datos del producto</h2>   
    <form method="POST" action="${product ? `/dashboard/${product._id}`: '/dashboard'}">
        <label name="name">Nombre del producto</label>
        <input type="text" name="name" value="${product ? `${product.name}` : ''}" required/>
        <label name="description">Descripción</label>
        <input type="text" name="description" value="${product ?`${product.description}` : ''}" required/>
        <label name="imgUrl">URL imagen</label>
        <input type="text" name="imgUrl" value="${product ? `${product.imgUrl}`: ''}" placeholder="/images/camiseta.jpeg" required/>
        <label name="category">Categoria</label>
        <select name="category" value="${product ? `${product.category}`: ''}" required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="camisetas">camisetas</option>
            <option value="zapatillas">zapatillas</option>
            <option value="pantalones">pantalones</option>
        </select>
        <label name="size">Talla</label>
        <input type="text" name="size" value="${product ? `${product.size}`: ''}" required/>
        <label name="price">Precio</label>
        <input type="number" min="0" name="price" value="${product?.price}" required/>
        <input class="button" type="submit" value="Enviar""/>
    </form>
    </div>`;
    return form;
}

const getNavBar = (user) => {
     return `<header class="navbar">
          <div class="links">
              <a href="${user ? '/dashboard' : '/products' }">Productos</a>
              <a href="${user ? '/dashboard?category=camisetas' : '/products?category=camisetas' }">Camisetas</a>
              <a href="${user ? '/dashboard?category=pantalones' : '/products?category=pantalones' }">Pantalones</a>
              <a href="${user ? '/dashboard?category=zapatillas' : '/products?category=zapatillas' }">Zapatillas</a>
              ${!user ? '<a href="/login">Login</a>' : "" }
              ${user ? '<a href="/dashboard/new">Nuevo Producto</a><a href="/logout">Logout</a>' : ''}
          </div>
       </header>`
    
}

const registerForm = () => {
  const form = `
  <h2>Registro</h2>
  <form method="POST" action="/register">
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
   <input class="button" type="submit" value="Aceptar""/>
  </form>
  `
  return form;
}

const loginForm = () => {
  const form = `
  <h2>Login</h2>
  <form>
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button class="button" id="loginButton">Aceptar</button>
   <div id="mensaje"></div>
  </form>
  <script type="module" src="./utils/configLogin.js"></script>
  `
  return form;
}

module.exports = {
    baseHtmlInit,
    baseHtmlEnd,
    getProductCards,
    getProductDetail,
    getProductForm,
    getNavBar,
    registerForm,
    loginForm
}