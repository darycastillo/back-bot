const CursoModel = require ('../models/Curso.model');

class CursoService {
    CursoService () {}

    async consultarCursos(listaCursos){
        try{
            return await CursoModel.find(/* { _id: {$in: listaCursos}} */);

        } catch (error){
            return error;
        }
    }

    async guardarCurso(curso = new CursoModel()) {
        try {
            let CursoGuardado;
            await CursoModel.create(curso).then((value) => {
            CursoGuardado = value;

            });

            return CursoGuardado;
        } catch (error) {
            console.log(error);
        }
    }

    async eliminarCurso (idc){
        console.log(idc);
        let CursoEliminado
        try {
            await CursoModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                CursoEliminado = value;
            });
return CursoEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarCurso (newCurso){
        let CursoModificado;
        try {
            await CursoModel.findByIdAndUpdate({
                _id: newCurso._id
            }, newCurso).then ((value) => {
                CursoModificado = value;
            })
            return CursoModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CursoService();
