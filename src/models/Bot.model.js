const { Schema, model } = require("mongoose");
const BotSchema = new Schema({


  bot_id: {
    type: String,
    required: [true, "El nombre del bot es obligatorio"],
  },
nota: [
  {
    ref: "Nota",type : Schema.Types.ObjectId
  }
]

});

module.exports = model("Bot", BotSchema);
