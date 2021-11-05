let { Schema, model } = require("mongoose");
let CursoSchema = new Schema({  
  codigo_curso: {
    type: String,
    required: [true, "El codigo del curso es obligatorio"],
  },
  Curso_nombre: {
    type: String,
    required: [true, "El nombre del curso es obligatorio"],
  },
});

module.exports = model("Cursos", CursoSchema);
