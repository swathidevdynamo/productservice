const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./utils/database');
const productController = require('./controllers/productController');

const app = express();

connectDB();

app.use(bodyParser.json());

app.get('/products/ping', productController.pingProductsControoler);
app.post('/products', productController.createProduct);
app.get('/products/:productId', productController.getProduct);
app.put('/products/:productId', productController.updateProduct);
app.delete('/products/:productId', productController.deleteProduct);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})