const EstudianteService = require("../services/Estudiante.service");

const consultaEstudiantes = async (req, res) => {
  const query = req.query;
  res.json({
    Estudiantes: await EstudianteService.consultarEstudiantes(query),
  });
};

const consultarEstudiantesByIdCurso = async (req, res) => {
  res.json({
    idCurso: req.query._id,
    estudiantesCurso: await EstudianteService.consultarEstudiantesByIdCurso(
      req.query._id
    ),
  });
};

const guardarEstudiantes = async (req, res) => {
  console.log(req.body);
  res.json({
    Estudiantes: await EstudianteService.guardarEstudiantes(req.body),
  });
  // check('estudiante_nombre', 'El nombre es obligatorio').not().isEmpty()
};

const eliminarEstudiantes = async (req, res) => {
  res.json({
    Estudiantes: await EstudianteService.eliminarEstudiantes(req.params.id),
  });
};

const modificarEstudiantes = async (req, res) => {
  res.json({
    Estudiantes: await EstudianteService.modificarEstudiantes(req.body),
  });
};

module.exports = {
  consultaEstudiantes,
  guardarEstudiantes,
  eliminarEstudiantes,
  modificarEstudiantes,
  consultarEstudiantesByIdCurso,
};
