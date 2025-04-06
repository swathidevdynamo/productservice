const productRepository = require('../repositories/productRepository');


class ProductService {
    
    async createProduct(name, description, price, stock){
        const product = await productRepository.createProduct(name,description,price,stock);
        return product;
    }

    async getProduct(productId){
        return productRepository.getProductById(productId);
    }
    async updateProduct(productId, updateFields){
        return productRepository.updateProduct(productId, updateFields);
    }

    async deleteProduct(productId){
        return productRepository.deleteProduct(productId);
    }
}

module.exports = new ProductService();