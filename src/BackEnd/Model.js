const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: false
    },
    productPrice: {
        type: Number,
        required: false
    }
});

const products = mongoose.model('products', productSchema);

module.exports = products;