const mongoose = require('mongoose');

//OJO EN EL MODELO EN LA IMAGEN HE PUESTO TIPO DE DATO MIXED, TENGO QUE MIRARLO

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    imgUrl: String,
    category: String,
    size: String,
    price: Number
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;