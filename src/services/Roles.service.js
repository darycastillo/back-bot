const RolModel = require ('../models/Roles.model');

class RolService {
    RolService () {}

    async consultarRol(){
        try{
            return await RolModel.find();

        } catch (error){
            return error;
        }
    }

    async guardarRol(rol = new RolModel()) {
        try {
            let RolGuardado;
            await RolModel.create(rol).then((value) => {
            RolGuardado = value;

            });

            return RolGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarRol (idc){
        console.log(idc);
        let RolEliminado
        try {
            await RolModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                RolEliminado = value;
            });
return RolEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarRol (newRol){
        let RolModificado;
        try {
            await RolModel.findByIdAndUpdate({
                _id: newRol._id
            }, newRol).then ((value) => {
                RolModificado = value;

            })
            return RolModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new RolService();
