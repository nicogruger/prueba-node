const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.get('/', productsController.bienvenida);

router.get('/:idProduct', productsController.detalle);

router.get('/:idProduct/comentarios/:idComentario?', productsController.detalleComentarios);

module.exports = router;
