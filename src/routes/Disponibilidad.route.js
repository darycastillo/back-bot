const {Route, Router} = require ('express');
const {consultarDisponibilidad, guardarDisponibilidad, eliminarDisponibilidad, modificarDisponibilidad, } = require ('../controllers/Disponibilidad.controller');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Disponibilidad' , consultarDisponibilidad);

// ruta post
router.post('/proyectfinal/api/Disponibilidad/registro', guardarDisponibilidad);

// ruta delet 

router.delete('/proyectfinal/api/Disponibilidad/eliminar/:id', eliminarDisponibilidad);

// ruta modificar 

router.put('/proyectfinal/api/Disponibilidad/modificar', modificarDisponibilidad);

module.exports = router;