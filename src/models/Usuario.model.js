const { Schema, model }  = require ('mongoose');
const UsuariosSchema = new Schema ({
    codigo_rol: { type: String, required: true,},
    usuario_correo: String,
    usuario_nombre: { type: String, required: true,},
    usuario_password: { type: String, required: true,},

});

module.exports = model('Usuarios', UsuariosSchema);


