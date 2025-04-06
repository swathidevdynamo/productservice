const productService = require('../services/productService');

class ProductController {

    async pingProductsControoler(req,res){
        return res.json({message: 'Product Controller is up'})
    }

    async createProduct(req, res){
        const { name, description, price ,stock } = req.body;
        try{
            const product = await productService.createProduct(name, description, price, stock);
            res.status(201).json(product);
        }catch(err){
            res.status(500).json({error: err.message});
        }
    }

    async getProduct(req, res){
        const { productId } = req.params;
        try{
            const product = await productService.getProduct(productId);
            if(!product){
                return res.status(404).json({error: 'Product not found'});
            }
          res.status(200).json(product);
        }catch(err){
            res.status(500).json({error: err.message})
        }
    }

    async updateProduct(req, res){
        const { productId } = req.params;
        const updateFields = req.body;
        try{
            const product = await productService.updateProduct(productId, updateFields)
            if(!product){
                return res.status(404).json({error: 'Product not found'});
            }
            res.status(200).json(product);
        }catch(err){
            res.status(500).json({error:err.message});
        }
    }

    async deleteProduct(req, res){
        const {productId} = req.params;
        try{
            const result = await productService.deleteProduct(productId);
            if(!result){
                return res.status(404).json({error: 'Product not found'});
            }
            res.status(204).send();
        }catch(err){
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = new ProductController();