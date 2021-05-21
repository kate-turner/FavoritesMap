import React, {useState, useEffect} from 'react';
import mapboxGl from 'mapbox-gl';
import style from './data/style.json';
import {reverseGeocode, saveToFavorites} from "./utils";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


// If there are issues, replace with your token
const ACCESS_TOKEN = 'pk.eyJ1IjoiZGFzdWxpdCIsImEiOiJjaXQzYmFjYmkwdWQ5MnBwZzEzZnNub2hhIn0.EDJ-lIfX2FnKhPw3nqHcqg';

export default function MapView(props) {
    const {activeViewPort} = props

    const mapContainer = React.createRef();
    const [map, setMap] = useState(null)
    const [geoCodeCoord, setGeoCodeCoord] = useState(null)


    useEffect(() => {
        const containerEl = mapContainer;
        if (containerEl && containerEl.current) {
            mapboxGl.accessToken = ACCESS_TOKEN;
            const map = new mapboxGl.Map({
                container: containerEl.current,
                style: style,
                // center: [-122.396449, 37.791256],
                // zoom: 15
                ...activeViewPort
            });
            setMap(map);
            map.addControl(
                new MapboxGeocoder({
                    accessToken: ACCESS_TOKEN,
                    mapboxgl: mapboxGl,
                    reverseGeocode: true
                })
            );
            map.on("click", (e) => {
                console.log(e)
                setGeoCodeCoord(e.lngLat)
                reverseGeocode(e.lngLat)
                // saveToFavorites(e.lngLat)
            })
        }
    }, [])



    return (
        <div ref={mapContainer} className="map-container"/>
    )
}

export {MapView}
