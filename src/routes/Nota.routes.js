const {Route, Router} = require ('express');
const {consultarNota, guardarNotasXLSX, eliminarNota, modificarNota, } = require ('../controllers/Nota.controller');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Nota' , consultarNota);

// ruta post
router.post('/proyectfinal/api/Nota/registroXLSX', guardarNotasXLSX);

// ruta delet 

router.delete('/proyectfinal/api/Nota/eliminar/:id', eliminarNota);

// ruta modificar 

router.put('/proyectfinal/api/Nota/modificar', modificarNota);

module.exports = router;