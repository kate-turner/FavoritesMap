import React, {useState} from "react";
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
        setActiveViewPort(coordinates)
    }

    function handleUpdateFavoritesList(favorite, mode) {
        if (mode === "add") {
            updateFavoritesList(favoriteList => [favorite, ...favoriteList]);
        }
        if (mode === "delete") {
            const newFavorites = favoriteList.filter((f) => f !== favorite);
            updateFavoritesList(newFavorites);
        }
    }

    return (
        <Grid>
            <Grid.Row>
                {favoriteList.length > 0 &&
                <Grid.Column width={4}>
                    <FavoriteList handleSetActiveViewPort={handleSetActiveViewPort} favoriteList={favoriteList}
                                  handleUpdateFavoritesList={handleUpdateFavoritesList}/>
                </Grid.Column>
                }
                <Grid.Column width={12}>
                    <MapView activeViewPort={activeViewPort} handleUpdateFavoritesList={handleUpdateFavoritesList}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}