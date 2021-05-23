const axios = require('axios');
const {REACT_APP_MAPBOX_ACCESS_TOKEN} = process.env
const token = 'pk.eyJ1IjoibGVsZWthdGllIiwiYSI6ImNrbzlnZHlqYzA0ZWkydnFtdWR3Z2FkdjcifQ.9zh2-xrEsyBHInXb8MXeLg'

export async function reverseGeocode(geolocation) {
    const {lng} = geolocation
    const {lat} = geolocation
    const formattedAddress = (`${lng},${lat}`)
    console.log(formattedAddress)
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${formattedAddress}.json?types=poi&access_token=${token}`)
}