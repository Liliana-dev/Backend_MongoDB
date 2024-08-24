const Producto = require('../models/Producto');

exports.agregarProductos = async(req, res) => {
    try {

        let productos;
        productos = new Producto(req.body)
        await productos.save();
        res.json(productos);

    }catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

exports.mostrarProductos = async (req, res) =>{
    try{

        const productos = await Producto.find();
        res.json(productos);

    }catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

exports.BuscarProducto = async (req, res) =>{
    try{

        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:"El producto no se encuentra por ID"});

        }else{
            res.json(productos);
        }

    }catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un producto');

    }
}

exports.modificarProductos = async (req, res) =>{
    try {

        const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!productos){
            res.status(404).send("Producto no encontrado");
        }else {
            res.json(productos);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al editar un producto');
    }
}

exports.editarProductos = async(req,res) =>{
    try {
        const productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!productos){
            return res.status(404).send("El producto no existe");
        }
        res.json(productos);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al editar un producto');        
    }
}

exports.eliminarProductos = async(req, res) =>{
    try {
        let productos = await Producto.findById({_id: req.params.id});
        if(!productos){
            res.status(404).sen("El producto no existe");
            return
        }
        await Producto.findOneAndDelete({_id: req.params.id})
        res.json({msg: "El producto fue eliminado con exito"});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un producto'); 
    }
}