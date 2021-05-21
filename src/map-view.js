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
    const {activeViewPort} = props

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
        // map.current.on('move', () => {
        //     setLng(map.current.getCenter().lng.toFixed(4));
        //     setLat(map.current.getCenter().lat.toFixed(4));
        //     setZoom(map.current.getZoom().toFixed(2));
        // });
    }, [activeViewPort]);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("click", (e) => {
            console.log(e)
            setGeoCodeCoord(e.lngLat)
            reverseGeocode(e.lngLat)
            // saveToFavorites(e.lngLat)
        })
    });

    // useEffect(() => {
    //     const containerEl = mapContainer;
    //     if (containerEl && containerEl.current) {
    //         mapboxGl.accessToken = ACCESS_TOKEN;
    //         const map = new mapboxGl.Map({
    //             container: containerEl.current,
    //             style: style,
    //             // center: [-122.396449, 37.791256],
    //             // zoom: 15
    //             ...activeViewPort
    //         });
    //         setMap(map);
    //         map.addControl(
    //             new MapboxGeocoder({
    //                 accessToken: ACCESS_TOKEN,
    //                 mapboxgl: mapboxGl,
    //                 reverseGeocode: true
    //             })
    //         );
    //         map.on("click", (e) => {
    //             console.log(e)
    //             setGeoCodeCoord(e.lngLat)
    //             reverseGeocode(e.lngLat)
    //             // saveToFavorites(e.lngLat)
    //         })
    //     }
    // }, [])



    return (
        <div ref={mapContainer} className="map-container"/>
    )
}

export {MapView}
