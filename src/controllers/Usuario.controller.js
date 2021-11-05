const UsuarioService = require('../services/Usuario.service');


const consultaUsuario = async (req, res) => {
    res.json({
        Usuario: await UsuarioService.consultarUsuario(req.query)
    });
}

const guardarUsuario = async (req, res) => {
    console.log(req.body);
    res.json({
        Usuarios: await UsuarioService.guardarUsuario(req.body)
    });
}

 const eliminarUsuario = async(req, res) => {
     res.json({
         Usuarios: await UsuarioService.eliminarUsuario(req.params.id)
     });

 }

 const modificarUsuario = async(req, res) => {
     res.json({
         Usuarios: await UsuarioService.modificarUsuario(req.body)
     })
 }



module.exports = {consultaUsuario, guardarUsuario, eliminarUsuario, modificarUsuario};

