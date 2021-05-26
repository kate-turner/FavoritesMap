const axios = require('axios');
const {REACT_APP_MAPBOX_TOKEN} = process.env

export async function reverseGeocode(geolocation) {
    const {lng} = geolocation
    const {lat} = geolocation
    const formattedAddress = (`${lng},${lat}`)
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedAddress}.json?types=poi&access_token=${REACT_APP_MAPBOX_TOKEN}`)
}