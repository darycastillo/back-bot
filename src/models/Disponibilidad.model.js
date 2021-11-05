const { Schema, model } = require("mongoose");
const DisponibiladSchema = new Schema({
  Disponibilidad: {
    type: String,
    required: [true, "La Disponibilidad del estudiante es obligarotia"],
  },

});

module.exports = model("Disponibilidad", DisponibiladSchema);
