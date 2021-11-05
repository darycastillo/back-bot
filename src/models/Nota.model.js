const { Schema, model } = require("mongoose");
const NotaSchema = new Schema({
  nota: {
    type: String,
    required: [true, "Es Obligatoria la nota porfavor"],
  },
  id_curso: {ref:'Cursos',type:Schema.Types.ObjectId},
  id_estudiante: {ref:'Estudiantes',type:Schema.Types.ObjectId}
});

module.exports = model("Nota", NotaSchema);
