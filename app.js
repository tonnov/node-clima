
const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

let encodeUrl = encodeURI( argv.direccion );

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyCsPwBVaXTXxGUEGVXIgHxUDgTKi2w8BYc`)
     .then( resp => {

        let loc = resp.data.results[0];
        let coords = loc.geometry.location;

        console.log('\n');
        console.log('Direccion: ',loc.formatted_address);
        console.log('Lat:', coords.lat);
        console.log('Lng:', coords.lng);
         //console.log( JSON.stringify(resp.data, undefined, 2 ));
         //console.log( resp.status );
     })
     .catch( e => console.log('Error: ', e));


// https://developers.google.com/maps/documentation/geocoding/start