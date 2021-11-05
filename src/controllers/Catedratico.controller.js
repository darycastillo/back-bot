//const { CursoService } = require('../services/Bot.service');
const CatedraticoService= require("../services/Catedratico.service");

const consultaCatedraticoByIdUs = async (req, res) => {
  res.json({
      catedratico: await CatedraticoService.consultaCatedraticoByIdUs(req.query.usuario)
  });
}

const guardarCatedratico = async (req, res) => {
  console.log(req.body);
  res.json({
    Catedraticos: await CatedraticoService.guardarCatedratico(req.body),
  });
};

const eliminarCatedratico = async (req, res) => {
  res.json({
    Catedraticos: await CatedraticoService.eliminarCatedratico(req.params.id),
  });
};

const modificarCatedratico = async (req, res) => {
  res.json({
    Catedraticos: await CatedraticoService.modificarCatedratico(req.body),
  });
};

module.exports = {
  consultaCatedraticoByIdUs,
  guardarCatedratico,
  eliminarCatedratico,
  modificarCatedratico,
};
