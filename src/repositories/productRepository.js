const Product = require('../models/productModel');

class ProductRepository {
    async createProduct(name, description, price, stock){
        const product = new Product({name, description, price, stock});
        await product.save();
        return product;
    }

    async getProductById(productId){
        return Product.findById(productId);
    }

    async updateProduct(productId, updateFields){
        return Product.findByIdAndUpdate(productId, updateFields, {new : true});
    }

    async deleteProduct(productId){
        return Product.findByIdAndDelete(productId);
    }

}

module.exports = new ProductRepository();