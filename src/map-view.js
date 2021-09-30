import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types'
import mapboxGl from 'mapbox-gl';
import style from './data/style.json';
import {reverseGeocode} from "./utils";

mapboxGl.accessToken = 'pk.eyJ1IjoiZGFzdWxpdCIsImEiOiJjaXQzYmFjYmkwdWQ5MnBwZzEzZnNub2hhIn0.EDJ-lIfX2FnKhPw3nqHcqg';

export default function MapView(props) {
    const {activeViewPort, handleUpdateFavoritesList} = props
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxGl.Map({
            container: mapContainer.current,
            style: style,
            ...activeViewPort
        });
    }, []);

    useEffect(() => {
        if (!map.current) return;
        map.current.flyTo(activeViewPort)
    }, [activeViewPort]);

    useEffect(() => {
        if (!map.current) return;
        map.current.on("click", async (e) => {
            const featureLocationData = (await reverseGeocode(e.lngLat)).data
            const t = featureLocationData.features[0].properties.category
            let type = t.split(', ')
            let category = type[type.length - 1]
            const metaLocationData = {...featureLocationData.features[0], ...e.lngLat, category}
            handleUpdateFavoritesList(metaLocationData, "add")
        })
    }, []);

    return (
        <div ref={mapContainer} className="map-container"/>
    )
}

MapView.propTypes = {
    activeViewPort: PropTypes.object.isRequired,
    handleUpdateFavoritesList: PropTypes.func.isRequired,
}

MapView.defaultProps = {
    activeViewPort: {
        center: [-122.396449, 37.791256],
        zoom: 15
    },
    handleUpdateFavoritesList: () => {
    }
}
