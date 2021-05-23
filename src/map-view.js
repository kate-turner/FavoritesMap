import React, {useState, useEffect, useRef} from 'react';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxGl from 'mapbox-gl';
import style from './data/style.json';
import {reverseGeocode, saveToFavorites} from "./utils";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxGl.accessToken = 'pk.eyJ1IjoiZGFzdWxpdCIsImEiOiJjaXQzYmFjYmkwdWQ5MnBwZzEzZnNub2hhIn0.EDJ-lIfX2FnKhPw3nqHcqg';



// If there are issues, replace with your token
// const ACCESS_TOKEN = 'pk.eyJ1IjoiZGFzdWxpdCIsImEiOiJjaXQzYmFjYmkwdWQ5MnBwZzEzZnNub2hhIn0.EDJ-lIfX2FnKhPw3nqHcqg';

export default function MapView(props) {
    const {activeViewPort, updateFavoritesList} = props

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [geoCodeCoord, setGeoCodeCoord] = useState(null)
    console.log('viewport changed')
    console.dir(activeViewPort)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        console.log('hitting non current example')
        map.current = new mapboxGl.Map({
            container: mapContainer.current,
            style: style,
            ...activeViewPort
        });
    }, []);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.flyTo(activeViewPort)
    }, [activeViewPort]);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("click", async (e) => {
            const locationData = (await reverseGeocode(e.lngLat)).data
            console.log(locationData)
            locationData.features.length > 0 ? updateFavoritesList(e.lngLat, "add"): console.log('Oops, looks like you did not choose a valid Point of Interest. Try again!')
        })
    });

    return (
        <div ref={mapContainer} className="map-container"/>
    )
}
