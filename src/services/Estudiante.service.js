const EstudianteModel = require("../models/Estudiante.model");

const rolModel = require("../models/Roles.model");
const DisponibilidadModel = require("../models/Disponibilidad.model");
const UsuarioModel = require("../models/Usuario.model");
const CursoModel = require("../models/Curso.model");

class EstudianteService {
  EstudianteService() {}

  async consultarEstudiantes(query = {}) {
    const manyFields = query.manyFields;
    const method = !manyFields ? "find" : "findOne";
    try {
      return await EstudianteModel[method](query)
        .populate("usuario")
        .populate("cursos");
    } catch (error) {
      return error;
    }
  }

  async consultarEstudiantesByIdCurso(_id) {
    try {
      return await EstudianteModel.find({ cursos: _id })
        .populate("usuario")
        .populate("cursos");
    } catch (error) {
      return error;
    }
  }

  async guardarEstudiantes(estudiante = new EstudianteModel()) {
    try {
      let estudianteGuardado;
      await EstudianteModel.create(estudiante).then((value) => {
        estudianteGuardado = value;
      });
      return estudianteGuardado;
    } catch (error) {
      console.log(error);
    }
  }

  async eliminarEstudiantes(idc) {
    console.log(idc);
    let estudianteEliminado;
    try {
      await EstudianteModel.findOneAndRemove({
        _id: idc,
      }).then((value) => {
        estudianteEliminado = value;
      });
      return estudianteEliminado;
    } catch (error) {
      console.log(error);
    }
  }

  async modificarEstudiantes(newEstudiante) {
    let EstudianteModificado;
    try {
      await EstudianteModel.findByIdAndUpdate(
        {
          _id: newEstudiante._id,
        },
        newEstudiante
      ).then((value) => {
        EstudianteModificado = value;
      });
      return EstudianteModificado;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EstudianteService();
