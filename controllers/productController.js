const Product = require('../models/Product')
const {baseHtmlInit, baseHtmlEnd, getProductCards, getProductDetail, getProductForm, getNavBar} = require('../templates/templates')


const ProductController = {
    async showProducts (req, res) {
        try {
            const filters = {}
            if (req.query.category) {
              filters.category = req.query.category
            }
            const products = await Product.find(filters);
            const productCards = getProductCards(products,req.user);
            
            const html = baseHtmlInit + getNavBar(req.user) + productCards + baseHtmlEnd;
            
            if (req.query.format === 'json') {
              return res.json(products)
            }
            res.send(html);
          } catch (err) {
            console.error("Error al traer los datos", err)
          }
    },
    async showProductById (req, res) {
        try {
            const productId = await Product.findById(req.params.productId)
            const productCard = getProductDetail(productId,req.user);
            
            const html = baseHtmlInit + getNavBar(req.user) + productCard + baseHtmlEnd;
            
            if (req.query.format === 'json') {
              return res.json(productId)
            }
            res.send(html)
          } catch (err) {
            console.error("Error al acceder al producto", err)
          }
    },
    async showNewProduct (req, res) {
      const form = getProductForm()
      const html = baseHtmlInit + getNavBar(true) + form + baseHtmlEnd
      res.send(html)
    },
    async createProduct(req, res) {
        try {
            const product = await Product.create(req.body)
            if (req.query.format === 'json') {
              return res.json(product)
            }
            res.redirect('/dashboard')
          } catch (err) {
            console.error("Error al crear", err)
          }
    },
    async showEditProduct (req, res) {
      try {
        const product = await Product.findById(req.params.productId)
        const form = getProductForm(product)
        const html = baseHtmlInit + getNavBar(true) + form + baseHtmlEnd
        res.send(html)

      } catch (error){
        console.error("Error al actualizar el producto", err)
      }
    },
    async updateProduct (req, res) {
        try {
            const id = req.params.productId
            const name = req.body.name
            const description = req.body.description
            const imgUrl = req.body.imgUrl
            const category = req.body.category
            const size = req.body.size
            const price = req.body.price
            const product = await Product.findByIdAndUpdate(
              id, {name, description, imgUrl, category, size, price}, {new: true}
            )
            if (req.query.format === 'json') {
              return res.json(product)
            }
            res.redirect('/dashboard')
          } catch (error) {
            console.error("Error al actualizar el producto", err)
          }
    },
    async deleteProduct (req, res) {
        try {
            const productId = req.params.productId
            const product = await Product.findByIdAndDelete(productId)
            if (req.query.format === 'json') {
              return res.json(product)
            }
            res.redirect('/dashboard')
          } catch (err) {
            console.error("no se ha podido eliminar el producto")
          }
    }

}

module.exports = ProductController