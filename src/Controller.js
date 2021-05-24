import React, {useEffect, useState} from "react";
import {Grid } from 'semantic-ui-react'
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
        if (mode === "add") {
            console.log(favorite)
            updateFavoritesList(favoriteList => [favorite, ...favoriteList]);
            console.log(mode)
        }
        if (mode === "delete") {
            console.log(favorite)
            const newFavorites = favoriteList.filter((f) => f !== favorite);
            updateFavoritesList(newFavorites);
            console.log(mode)
        }
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <FavoriteList handleSetActiveViewPort={handleSetActiveViewPort} favoriteList={favoriteList}
                                  handleUpdateFavoritesList={handleUpdateFavoritesList}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <MapView activeViewPort={activeViewPort} updateFavoritesList={handleUpdateFavoritesList}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}