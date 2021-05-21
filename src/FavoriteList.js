import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort, favoriteList, handleUpdateFavoritesList} = props

    return (
        <div>
            <h1>
                Favorites
            </h1>
            {favoriteList.map((favorite) =>
            <ListItem handleSetActiveViewPort={handleSetActiveViewPort} favorite={favorite}
                      handleUpdateFavoritesList={handleUpdateFavoritesList}/>
            )}
        </div>
    )
}