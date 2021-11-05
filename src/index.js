const {app} = require('./app');
const {dbConection} = require ('./db/database.js');

async function main() {
    // conectar a la base de datos
    await dbConection ();
    // conectar al puerto iniciar el servidor 
    await app.listen(8000);
    console.log("conection 8000");
   
}
main();
