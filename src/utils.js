const axios = require('axios');
const {REACT_APP_MAPBOX_ACCESS_TOKEN} = process.env
const token = 'pk.eyJ1IjoibGVsZWthdGllIiwiYSI6ImNrbzlnZHlqYzA0ZWkydnFtdWR3Z2FkdjcifQ.9zh2-xrEsyBHInXb8MXeLg'

export function saveToFavorites(geolocation) {
    console.log(geolocation)
}

export async function reverseGeocode(geolocation) {
    console.log(REACT_APP_MAPBOX_ACCESS_TOKEN)
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=${token}`).then((res) => {
        console.log(res.data)
    })
}