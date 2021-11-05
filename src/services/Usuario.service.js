const UsuarioModel = require("../models/Usuario.model");

class UsuarioService {
  EstudianteService() {}

  async consultarUsuario({usuario_nombre, usuario_password}) {
    try {
      return await UsuarioModel.findOne({
        usuario_nombre: usuario_nombre,
        usuario_password: usuario_password,
      });
    } catch (error) {
      return error;
    }
  }

  async guardarUsuario(usuario = new UsuarioModel()) {
    try {
      let UsuarioGuardado;
      await UsuarioModel.create(usuario).then((value) => {
        UsuarioGuardado = value;
      });

      return UsuarioGuardado;
    } catch (error) {
      console.log(Error);
    }
  }

  async eliminarUsuario(idc) {
    console.log(idc);
    let UsuarioEliminado;
    try {
      await UsuarioModel.findOneAndRemove({
        _id: idc,
      }).then((value) => {
        UsuarioEliminado = value;
      });
      return UsuarioEliminado;
    } catch (error) {
      console.log(error);
    }
  }

  async modificarUsuario(newUsuario) {
    let UsuarioModificado;
    try {
      await UsuarioModel.findByIdAndUpdate(
        {
          _id: newUsuario._id,
        },
        newUsuario
      ).then((value) => {
        UsuarioModificado = value;
      });
      return UsuarioModificado;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UsuarioService();
