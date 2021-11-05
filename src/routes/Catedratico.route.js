const {Route, Router} = require ('express');
const {consultaCatedraticoByIdUs, guardarCatedratico, eliminarCatedratico, modificarCatedratico, } = require ('../controllers/Catedratico.controller');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/CatedraticoByIdUs' , consultaCatedraticoByIdUs);

// ruta post
router.post('/proyectfinal/api/Catedratico/registro', guardarCatedratico);

// ruta delet 

router.delete('/proyectfinal/api/Catedratico/eliminar/:id', eliminarCatedratico);

// ruta modificar 

router.put('/proyectfinal/api/Catedratico/modificar', modificarCatedratico);

module.exports = router;