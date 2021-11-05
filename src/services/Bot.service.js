const BotModel = require ('../models/Bot.model');
const EstudianteModel = require("../models/Estudiante.model");
const NotaModel = require ('../models/Nota.model');
class BotService {
    CursoService () {}

    async consultarBot(){
        try{
            return await BotModel.find().populate("nota",["nota","curso", "estudiante"]);

        } catch (error){
            return error;
        }
    }

    async guardarBot(bot = new BotModel()) {
        try {
// estudiante
            const { nota } = bot;

            if (nota) {
              //buscar los corsos para obtener el _id
              const notaEncontrados = await NotaModel.find({
               estudiante: { $in: nota },
              });
              const idsnota = notaEncontrados.map((nota) => nota._id);
              bot.nota = idsnota;
            }
            let BotGuardado;
            await BotModel.create(bot).then((value) => {
            BotGuardado = value;

            });

            return BotGuardado;
        } catch (error) {
            console.log(Error);
        }
    }

    async eliminarBot (idc){
        console.log(idc);
        let BotEliminado
        try {
            await BotModel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                BotEliminado = value;
            });
return BotEliminado;

            
        } catch (error) {
console.log(error);



        }
    }

    async modificarBot (newBot){
        let BotModificado;
        try {
            await BotModel.findByIdAndUpdate({
                _id: newBot._id
            }, newBot).then ((value) => {
                BotModificado = value;

            })
            return BotModificado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new BotService();
