const { Schema, model } = require("mongoose");
const CatedraticosSchema = new Schema({
  catedratico_nombres: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  catedratico_apellidos: {
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
});

module.exports = model("Catedraticos", CatedraticosSchema);
