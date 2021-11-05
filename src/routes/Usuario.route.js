const {Route, Router} = require ('express');
const {consultaUsuario, guardarUsuario, eliminarUsuario, modificarUsuario, } = require ('../controllers/Usuario.controller');
const { esUsuarioValido, existeUsuario} = require('../helpers/validator.usuario');
const { validarCampos } = require("../milddleware/validar-campos");
const { check } = require("express-validator");
const router = Router();

// ruta get 
router.get('/proyectfinal/api/Usuario' ,/*[
check('usuario_nombre').custom(esUsuarioValido), validarCampos,
],*/ consultaUsuario);

// ruta post
router.post('/proyectfinal/api/Usuario/registro',[
check   ('usuario_nombre').custom(existeUsuario), validarCampos,

], guardarUsuario);

  //check('Rol').custom(existeRol),
// ruta delet 

router.delete('/proyectfinal/api/Usuario/eliminar/:id', eliminarUsuario);

// ruta modificar 

router.put('/proyectfinal/api/Usuario/modificar', modificarUsuario);

module.exports = router;