const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product-controller')

//OJO REVISAR LAS RUTAS PUES HAY ALGUNAS QUE NO HACEN LO QUE TIENEN QUE HACER. 

router.get('/products', ProductController.showProducts)
router.get('/products/:productId' , ProductController.showProductById)
router.get('/dashboard', ProductController.showProducts)
router.get('/dashboard/new', ProductController.showNewProduct)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.showProductById)
router.get('/dashboard/:productId/edit', ProductController.showEditProduct)
router.post('/dashboard/:productId', ProductController.updateProduct)
router.put('/dashboard/:productId', ProductController.updateProduct)
router.get('/dashboard/:productId/delete', ProductController.deleteProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router









