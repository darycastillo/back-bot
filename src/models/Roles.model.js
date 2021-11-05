const { Schema, model }  = require ('mongoose');
const RolSchema = new Schema ({
    rol: String,
});

module.exports = model('Roles', RolSchema);
