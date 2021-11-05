const mongoose = require ('mongoose');

const stringConnection =
  "mongodb+srv://proDW:Test12345.@cluster0.cqbgp.mongodb.net/ProyectoFinal_dw?retryWrites=true&w=majority";
  
const dbConection = async() => {
    try {
        console.log('Conection a base de datos..');
        await mongoose.connect(
          stringConnection /* 'mongodb://localhost:27017/ProyectoFinal_dw' */,
          {}
        );
        console.log('conexion a la base de datos exitosa');
    } catch (error){

    throw new Error(error);

    }
}

module.exports = {
    dbConection
}