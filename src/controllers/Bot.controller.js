const BotService = require('../services/Bot.service');


const consultarBot = async (req, res) => {
    res.json({
        Bot: await BotService.consultarBot()
    });
}
//aqui me quede
const guardarBot = async (req, res) => {
    console.log(req.body);
    res.json({
        Bot: await BotService.guardarBot(req.body)
    });
}

 const eliminarBot = async(req, res) => {
     res.json({
         Bot: await BotService.eliminarBot(req.params.id)

     });

 }

 const modificarBot = async(req, res) => {
     res.json({
         Bot: await BotService.modificarBot(req.body)
     })
 }



module.exports = {consultarBot, guardarBot, eliminarBot, modificarBot};

