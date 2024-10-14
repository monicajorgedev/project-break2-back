const ProductController = require('../controllers/productController');
const Product = require('../models/Product');
const { getProductCards, getProductDetail, getProductForm, getNavBar, baseHtmlInit, baseHtmlEnd } = require('../templates/templates');

jest.mock('../models/Product');
jest.mock('../templates/templates');

describe('ProductController', () => {
  let req;
  let res;
  
  beforeEach(() => {
    req = {
      query: {},
      params: {},
      body: {},
      user: { isAdmin: true }
    };
    
    res = {
      send: jest.fn(),
      json: jest.fn(),
      redirect: jest.fn()
    };
    
    getNavBar.mockReturnValue('<nav>Mocked Navbar</nav>');

  });

  describe('showProducts', () => {
    it('should return HTML with product cards when products are found', async () => {
        const mockProducts = [{ name: 'Product 1' }, { name: 'Product 2' }];
        Product.find.mockResolvedValue(mockProducts);
        getProductCards.mockReturnValue('<div>Product Cards</div>');
      
        await ProductController.showProducts(req, res);
      
        expect(Product.find).toHaveBeenCalled();
        expect(getProductCards).toHaveBeenCalledWith(mockProducts, req.user);
        expect(res.send).toHaveBeenCalledWith(expect.stringContaining('<div>Product Cards</div>'));
      });
      

    it('should return products as JSON if format is set to json', async () => {
      req.query.format = 'json';
      const mockProducts = [{ name: 'Product 1' }, { name: 'Product 2' }];
      Product.find.mockResolvedValue(mockProducts);
      
      await ProductController.showProducts(req, res);
      
      expect(res.json).toHaveBeenCalledWith(mockProducts);
    });
  });

  describe('showProductById', () => {
    it('should return HTML with product detail for a specific product', async () => {
      const mockProduct = { name: 'Product 1' };
      Product.findById.mockResolvedValue(mockProduct);
      getProductDetail.mockReturnValue('<div>Product Detail</div>');

      req.params.productId = '123';

      await ProductController.showProductById(req, res);

      expect(Product.findById).toHaveBeenCalledWith('123');
      expect(getProductDetail).toHaveBeenCalledWith(mockProduct, req.user);
      expect(res.send).toHaveBeenCalledWith(expect.stringContaining('<div>Product Detail</div>'));
    });

    it('should return product as JSON if format is set to json', async () => {
      req.query.format = 'json';
      const mockProduct = { name: 'Product 1' };
      Product.findById.mockResolvedValue(mockProduct);
      req.params.productId = '123';

      await ProductController.showProductById(req, res);

      expect(res.json).toHaveBeenCalledWith(mockProduct);
    });
  });

  describe('createProduct', () => {
    it('should create a new product and redirect to /dashboard', async () => {
      req.body = { name: 'New Product', description: 'New description' };
      const mockCreatedProduct = { id: '1', name: 'New Product' };
      Product.create.mockResolvedValue(mockCreatedProduct);
      
      await ProductController.createProduct(req, res);
      
      expect(Product.create).toHaveBeenCalledWith(req.body);
      expect(res.redirect).toHaveBeenCalledWith('/dashboard');
    });

    it('should return created product as JSON if format is set to json', async () => {
      req.query.format = 'json';
      req.body = { name: 'New Product', description: 'New description' };
      const mockCreatedProduct = { id: '1', name: 'New Product' };
      Product.create.mockResolvedValue(mockCreatedProduct);
      
      await ProductController.createProduct(req, res);
      
      expect(res.json).toHaveBeenCalledWith(mockCreatedProduct);
    });
  });

  describe('deleteProduct', () => {
    it('should delete a product and redirect to /dashboard', async () => {
      req.params.productId = '123';
      const mockDeletedProduct = { id: '123', name: 'Deleted Product' };
      Product.findByIdAndDelete.mockResolvedValue(mockDeletedProduct);
      
      await ProductController.deleteProduct(req, res);
      
      expect(Product.findByIdAndDelete).toHaveBeenCalledWith('123');
      expect(res.redirect).toHaveBeenCalledWith('/dashboard');
    });
  });
});
