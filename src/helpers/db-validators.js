
//const Usuario = require('../models/usuario');
const Roles = require('../models/Roles.model')


const esRoleValido = async (Rol = '')=>{
    const existeRol = await Roles.findOne({Rol});
    if(!existeRol){
        throw new Error(`El rol ${Rol} ya es registrado en la BD`)
    }
   
}

const existeRol =async(Rol='')=>{ 

    const existe = await Roles.findOne({ Rol });
    if (existe) {
        throw new Error(`El Rol: ${Rol} ya esta registrado`);
        // return res.status(400).json({
        //     msg: 'El correo ya esta registrado !!'
        // })
    }
}

const existeUsuarioPorId =async(id_Rol='')=>{ 

    const usuarioExiste = await Roles.findById(id);
    if ( !usuarioExiste) {
        throw new Error(`El id: ${id_Rol} no pertenece a ningun usuario`);
    }
}

module.exports = {
    esRoleValido,
    existeRol,
    existeUsuarioPorId
}