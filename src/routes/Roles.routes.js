const { Route, Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../milddleware/validar-campos");
const {
  consultaRol,
  guardarRol,
  eliminarRol,
  modificarRol,
} = require("../controllers/Roles.controller");

const {esRoleValido, existeRol, existeUsuarioPorId} = require('../helpers/db-validators');
const router = Router();

// ruta get
router.get("/proyectfinal/api/Rol",[
 check("id_Rol", "Ingrese id correcto!!").not().isEmpty()
  
], consultaRol);

 //  check("id_Rol", "Ingrese id correcto!!").not().isEmpty()
// ruta post 
router.post(
  "/proyectfinal/api/Rol/registro",
  [
   //check("id_Rol", "Ingrese id correcto!!").not().isEmpty(),
   //check('id_Rol').custom(existeUsuarioPorId),
   // check("Rol", "Ingrese el rol correcto!!").not().isEmpty(),
   //check('Rol').custom(esRoleValido),
   //check('Rol').custom(existeRol),
    validarCampos,
  ],
  guardarRol
); 

// ruta delet

router.delete("/proyectfinal/api/Rol/eliminar/:id", eliminarRol);
[
    check('_id', 'No es un id valido').isMongoId(),
   //
   //check('Rol').custom(esRoleValido),
    validarCampos]
// ruta modificar

router.put("/proyectfinal/api/Rol/modificar", [
    check('_id', 'No es un id valido').isMongoId(),
   // check('id_Rol').custom(existeUsuarioPorId),
  // check('Rol').custom(esRoleValido),
    validarCampos], modificarRol);


module.exports = router;
