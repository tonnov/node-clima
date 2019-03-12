
const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {

    try {
        
        let place = await lugar.getLugarLatLng(direccion);
        let temper = await clima.getClima(place.lat, place.lng);

        return `Ciudad: ${ place.direccion }, LatLng: ${ place.lat } : ${ place.lng } Temperatura: ${ temper.temp } celsius`;
    
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje))
    .catch(e => console.log(e));
