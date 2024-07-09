//variables globales del sistema

//dotenv para usar var de entorno
require('dotenv').config(); 
module.exports = {
    app: {
        port: process.env.PORT || 4000,
        
    }
}