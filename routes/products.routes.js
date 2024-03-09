const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.get('/', productsController.products);

router.get('/:idProduct', productsController.products);

router.get('/:idProduct/comentarios/:idComentario?', productsController.products);

module.exports = router;
