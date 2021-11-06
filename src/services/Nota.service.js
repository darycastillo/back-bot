const NotaModel = require("../models/Nota.model");
const CursoModel = require("../models/Curso.model");
const EstudianteModel = require("../models/Estudiante.model");
class NotaService {
  CursoService() {}

  async consultarNota(query = {}) {
    try {
      const queryMongo = {};
      if (query.carnet) {
        const estudiante = await EstudianteModel.findOne({
          carnet: query.carnet,
        });
        const { _id } = estudiante;
        queryMongo.id_estudiante = _id;
      }

      return await NotaModel.find(queryMongo)
        .populate("id_curso", ["Curso_nombre", "id_Curso"])
        .populate("id_estudiante");
    } catch (error) {
      return error;
    }
  }

  async guardarNotasXLSX(notas) {
    try {
      const res = await notas.map(async (nota) => {
        //Se optiene el estudiante
        const estudiante = await EstudianteModel.findOne({
          carnet: nota.estudiante_carnet,
        });

        //buscar los corsos para obtener el _id
        const curso = await CursoModel.findOne({
          codigo_curso: nota.codigo_curso,
        });

        const newNota = {
          nota: nota.estudiante_nota,
          id_curso: curso._id,
          id_estudiante: estudiante._id,
        };
        const nota_ = await NotaModel.create(newNota);
        return nota_;
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async eliminarNota(idc) {
    console.log(idc);
    let NotaEliminado;
    try {
      await NotaModel.findOneAndRemove({
        _id: idc,
      }).then((value) => {
        NotaEliminado = value;
      });
      return NotaEliminado;
    } catch (error) {
      console.log(error);
    }
  }

  async modificarNota(newNota) {
    let NotaModificado;
    try {
      await NotaModel.findByIdAndUpdate(
        {
          _id: newNota._id,
        },
        newNota
      ).then((value) => {
        NotaModificado = value;
      });
      return NotaModificado;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new NotaService();
