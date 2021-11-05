const NotaService = require('../services/Nota.service');


const consultarNota = async (req, res) => {
    res.json({
        Nota: await NotaService.consultarNota()
    });
}
//aqui me quede
const guardarNotasXLSX = async (req, res) => {
    console.log(req.body);
    res.json({
        notas: await NotaService.guardarNotasXLSX(req.body.notas)
    });
}

 const eliminarNota = async(req, res) => {
     res.json({
         Bot: await NotaService.eliminarNota(req.params.id)

     });

 }

 const modificarNota = async(req, res) => {
     res.json({
         Nota: await NotaService.modificarNota(req.body)
     })
 }



module.exports = {consultarNota, guardarNotasXLSX, eliminarNota, modificarNota};

