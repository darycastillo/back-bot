const DisponibilidadModel = require ('../models/Disponibilidad.model');

class DisponibilidadService {
    DisponibilidadService () {}

    async consultarDisponibilidad(){
        try{
            return await DisponibilidadModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarDisponibilidad(disponibilidad = new DisponibilidadModel()) {
        try {
            let DisponibilidadGuardado;
            await DisponibilidadModel.create(disponibilidad).then((value) => {
            DisponibilidadGuardado = value;

            });

            return DisponibilidadGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarDisponibilidad (idc){
        console.log(idc);
        let DisponibilidadEliminado
        try {
            await DisponibilidadModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                DisponibilidadEliminado = value;
            });
return DisponibilidadEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarDisponibilidad (newDisponibilidad){
        let DisponibilidadModificado;
        try {
            await DisponibilidadModel.findByIdAndUpdate({
                _id: newDisponibilidad._id
            }, newDisponibilidad).then ((value) => {
                DisponibilidadModificado = value;

            })
            return DisponibilidadModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DisponibilidadService();
