const RolService = require('../services/Roles.service');


const consultaRol = async (req, res) => {
    res.json({
        Roles: await RolService.consultarRol()
    });
}

const guardarRol = async (req, res) => {
    console.log(req.body);
    res.json({
        Roles: await RolService.guardarRol(req.body)
    });
}

 const eliminarRol = async(req, res) => {
     res.json({
         Roles: await RolService.eliminarRol(req.params.id)

     });

 }

 const modificarRol = async(req, res) => {
     res.json({
         Roles: await RolService.modificarRol(req.body)
     })
 }



module.exports = {consultaRol, guardarRol, eliminarRol, modificarRol};

