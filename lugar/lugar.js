
const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI( direccion );

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyCsPwBVaXTXxGUEGVXIgHxUDgTKi2w8BYc`)

        if (resp.data.status ===  'ZERO_RESULTS') {

            throw new Error(`No hay resultados para la ciudad ${ direccion }`);

        }
    
        let loc = resp.data.results[0];
        let coords = loc.geometry.location;

        // console.log('Direccion: ',loc.formatted_address);
        // console.log('Lat:', coords.lat);
        // console.log('Lng:', coords.lng);

        return {
            direccion: loc.formatted_address,
            lat: coords.lat,
            lng: coords.lng
        }

}

module.exports = {
    getLugarLatLng
}