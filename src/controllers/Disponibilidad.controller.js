const DisponibilidadService = require('../services/Disponibilidad.service');


const consultarDisponibilidad = async (req, res) => {
    res.json({
        Disponibilidad: await DisponibilidadService.consultarDisponibilidad()
    });
}
//aqui me quede
const guardarDisponibilidad = async (req, res) => {
    console.log(req.body);
    res.json({
        Disponibilidad: await DisponibilidadService.guardarDisponibilidad(req.body)
    });
}

 const eliminarDisponibilidad = async(req, res) => {
     res.json({
         Disponibilidad: await DisponibilidadService.eliminarDisponibilidad(req.params.id)

     });

 }

 const modificarDisponibilidad= async(req, res) => {
     res.json({
         Disponibilidad: await DisponibilidadService.modificarDisponibilidad(req.body)
     })
 }



module.exports = {consultarDisponibilidad, guardarDisponibilidad, eliminarDisponibilidad, modificarDisponibilidad};

