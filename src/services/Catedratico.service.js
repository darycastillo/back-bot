const CatedraticoModel = require("../models/Catedratico.model");
const CursoModel = require("../models/Curso.model");
const UsuarioModel = require("../models/Usuario.model");
const rolModel = require("../models/Roles.model");
class CatedraticoService {
  CatedraticoService() {}

  async consultaCatedraticoByIdUs(usuario) {
    try {
        return await CatedraticoModel.findOne({
          usuario: usuario
        })
        .populate("cursos")
        .populate("usuario")
    } catch (error) {
      return error;
    }
  }

  async guardarCatedratico(catedratico = new CatedraticoModel()) {
    try {     
      let CatedraticoGuardado;
      await CatedraticoModel.create(catedratico).then((value) => {
        CatedraticoGuardado = value;
      });
      console.log(catedratico);
      return CatedraticoGuardado;
    } catch (error) {
      console.log(error);
    }
  }

  async eliminarCatedratico(idc) {
    console.log(idc);
    let CatedraticoEliminado;
    try {
      await CatedraticoModel.findOneAndRemove({
        _id: idc,
      }).then((value) => {
        CatedraticoEliminado = value;
      });
      return CatedraticoEliminado;
    } catch (error) {
      console.log(error);
    }
  }

  async modificarCatedratico(newCatedratico) {
    let CatedraticoModificado;
    try {
      await CatedraticoModel.findByIdAndUpdate(
        {
          _id: newCatedratico._id,
        },
        newCatedratico
      ).then((value) => {
        CatedraticoModificado = value;
      });
      return CatedraticoModificado;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CatedraticoService();
