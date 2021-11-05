const bodyParser = require('body-parser');

const express = require("express");
const morgan = require("morgan");
const cors = require ("cors");
//const {validarCampos} = require('./milddleware/validar-campos');
const validarCampos = require('./milddleware/validar-campos')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

  
const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

// application level middleware
app.use(LoggerMiddleware);
app.use(validarCampos.validarCampos);
app.use(require("./routes/Estudiantes.route"));
app.use(require("./routes/Catedratico.route"));
app.use(require("./routes/Usuario.route"));
app.use(require("./routes/Roles.routes"));
app.use(require("./routes/Curso.routes"));
app.use(require("./routes/Bot.route"));
app.use(require("./routes/Nota.routes"));
app.use(require("./routes/Disponibilidad.route"));

module.exports = { app };
