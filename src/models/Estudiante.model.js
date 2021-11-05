const { Schema, model } = require("mongoose");
const EstudiantesSchema = new Schema({
  carnet: { type: String, required: true },
  estudiante_nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  estudiante_apellido: {
    type: String,
    requerid: [true, "El apellido es obligatorio"],
  },
  cursos: [
    {
      ref: "Cursos",
      type: Schema.Types.ObjectId,
    },
  ],
  usuario: {
    ref: "Usuarios",
    type: Schema.Types.ObjectId,
  },
  disponibilidad: String,
});

module.exports = model("Estudiantes", EstudiantesSchema);
