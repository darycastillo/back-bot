const CursoService = require('../services/Curso.service');


const consultarCursos = async (req, res) => {
    res.json({
        Cursos: await CursoService.consultarCursos(req.query.listaCursos)
    });
}
//aqui me quede
const guardarCurso = async (req, res) => {
    console.log(req.body);
    res.json({
        Cursos: await CursoService.guardarCurso(req.body)
    });
}

 const eliminarCurso = async(req, res) => {
     res.json({
         Cursos: await CursoService.eliminarCurso(req.params.id)

     });

 }

 const modificarCurso = async(req, res) => {
     res.json({
         Cursos: await CursoService.modificarCurso(req.body)
     })
 }



module.exports = {consultarCursos, guardarCurso, eliminarCurso, modificarCurso};

