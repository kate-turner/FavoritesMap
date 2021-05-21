import React, {useEffect, useState} from "react";
import FavoriteList from "./FavoriteList";
import MapView from "./map-view";


export default function Controller() {
    const [activeViewPort, setActiveViewPort] = useState({
        center: [-122.396449, 37.791256],
        zoom: 15
    })
    const [favoriteList, updateFavoritesList] = useState([])

    function handleSetActiveViewPort(coordinates) {
        console.log("click")
        setActiveViewPort(coordinates)
    }

    function handleUpdateFavoritesList(favorite, mode) {
        if(mode === "add") {
            console.log(favorite)
            updateFavoritesList([...favoriteList, favorite]);
            console.log(mode)
        }
        if(mode === "delete"){
            console.log(favorite)
            const newFavorites = favoriteList.filter((f) => f !== favorite);
            updateFavoritesList(newFavorites);
            console.log(mode)
        }
    }

    useEffect(() => {
        console.log(favoriteList)
    }, [favoriteList])

    return (
        <div>
            <FavoriteList handleSetActiveViewPort={handleSetActiveViewPort} favoriteList={favoriteList} handleUpdateFavoritesList={handleUpdateFavoritesList}/>
            <MapView activeViewPort={activeViewPort} updateFavoritesList={handleUpdateFavoritesList}/>
        </div>
    )
}