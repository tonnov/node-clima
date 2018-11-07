const axios = require('axios');

const getClima = async(lat, lng) => {
 
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=59e9acd988cd0a6fc7edd8be9908aa15`);
    
    //console.log(resp);

    if (resp.statusText !=  'OK') {

        throw new Error(`No hay resultados del clima`);

    }

    return resp.data.main;
}

module.exports = {
    getClima
}