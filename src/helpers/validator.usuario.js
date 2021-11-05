
//const Usuario = require('../models/usuario');
const Usuarios = require('../models/Usuario.model')


const esUsuarioValido = async (usuario_nombre = '')=>{
    const existeUsuario = await Usuarios.findOne({usuarios_nombre});
    if(!existeUsuario){
        throw new Error(`El Usuario ${usuario_nombre} ya es registrado en la BD`)
    }
   
}

const existeUsuario =async(usuario_nombre='')=>{ 

    const existe = await Usuarios.findOne({ usuario_nombre });
    if (existe) {
        throw new Error(`Usuario: ${usuario_nombre} ya esta registrado`);
        // return res.status(400).json({
        //     msg: 'El correo ya esta registrado !!'
        // })
    }
}


module.exports = {
    esUsuarioValido,
    existeUsuario
}