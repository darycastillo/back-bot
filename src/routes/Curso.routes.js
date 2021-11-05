const {Route, Router} = require ('express');
const {consultarCursos, guardarCurso, eliminarCurso, modificarCurso, } = require ('../controllers/Curso.controllers');
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Cursos' , consultarCursos);

// ruta post
router.post('/proyectfinal/api/Curso/registro', guardarCurso);

// ruta delet 

router.delete('/proyectfinal/api/Curso/eliminar/:id', eliminarCurso);

// ruta modificar 

router.put('/proyectfinal/api/Curso/modificar', modificarCurso);

module.exports = router;