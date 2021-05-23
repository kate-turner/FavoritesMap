import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";
import {List} from "semantic-ui-react";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort, favoriteList, handleUpdateFavoritesList} = props

    return (
        <List>
            <h2> Favorites</h2>
            {favoriteList.map((favorite) =>
                <ListItem handleSetActiveViewPort={handleSetActiveViewPort} favorite={favorite}
                          handleUpdateFavoritesList={handleUpdateFavoritesList}/>
            )}
        </List>
    )
}