
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then( resp => {
        console.log( resp );
    })
    .catch(e => console.log(e));
//console.log(argv.direccion);

// https://developers.google.com/maps/documentation/geocoding/start