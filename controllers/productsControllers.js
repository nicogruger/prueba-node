let productsControllers = {
    bienvenida: function (req, res) {
        res.send("Bienvenidos a la página de productos");
    },
    detalle: function (req, res) {
        res.send("Bienvenidos al detalle del producto " + req.params.idProduct);
    },
    detalleComentarios: function (req, res) {
        if (req.params.idComentario === undefined) {
            res.send("Bienvenidos a los comentarios del producto " + req.params.idProduct);
        } else {
            res.send("Bienvenidos al comentario " + req.params.idComentario + " del producto " + req.params.idProduct);
        };
}
}
module.exports = productsControllers;