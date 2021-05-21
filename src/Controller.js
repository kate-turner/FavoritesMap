import React, {useEffect, useState} from "react";
import FavoriteList from "./FavoriteList";
import MapView from "./map-view";


export default function Controller() {
    const [activeViewPort, setActiveViewPort] = useState({
        center: [-122.396449, 37.791256],
        zoom: 15
    })

    function handleSetActiveViewPort(coordinates) {
        setActiveViewPort({
            center: [-122.396449, 37.791256],
            zoom: 15
        })
    }

    return (
        <div>
            <FavoriteList/>
            <MapView activeViewPort={activeViewPort}/>
        </div>
    )
}