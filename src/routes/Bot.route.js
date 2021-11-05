const {Route, Router} = require ('express');
const {consultarBot, guardarBot, eliminarBot, modificarBot, } = require ('../controllers/Bot.controller');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Bot' , consultarBot);

// ruta post
router.post('/proyectfinal/api/Bot/registro', guardarBot);

// ruta delet 

router.delete('/proyectfinal/api/Bot/eliminar/:id', eliminarBot);

// ruta modificar 

router.put('/proyectfinal/api/Bot/modificar', modificarBot);

module.exports = router;