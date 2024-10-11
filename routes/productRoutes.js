const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const checkAuth = require('../middlewares/checkAuth')


router.get('/products', ProductController.showProducts)
router.get('/products/:productId' , ProductController.showProductById)
router.get('/dashboard', checkAuth, ProductController.showProducts)
router.get('/dashboard/new',checkAuth, ProductController.showNewProduct)
router.post('/dashboard', checkAuth,ProductController.createProduct)
router.get('/dashboard/:productId',checkAuth, ProductController.showProductById)
router.get('/dashboard/:productId/edit',checkAuth, ProductController.showEditProduct)
router.post('/dashboard/:productId',checkAuth, ProductController.updateProduct)
router.put('/dashboard/:productId', checkAuth,ProductController.updateProduct)
router.get('/dashboard/:productId/delete', checkAuth, ProductController.deleteProduct)
router.delete('/dashboard/:productId/delete', checkAuth, ProductController.deleteProduct)

module.exports = router









