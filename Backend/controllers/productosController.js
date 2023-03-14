const Productos = require('../models/Productos');

//agrega nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
        
    } catch (error) {
        console.log(error);
        next();
    }

}