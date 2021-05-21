import React, {useEffect, useState} from "react";


export default function ListItem(props) {
    const {handleSetActiveViewPort, favorite, handleUpdateFavoritesList} = props

    function onFavoriteClick(favorite) {
        handleSetActiveViewPort({
            center: [favorite.lng, favorite.lat],
            zoom: 15
        })
    }

    function onDeleteClick(favorite) {
        handleUpdateFavoritesList(favorite, "delete")
    }

    return (
        <div>
            <button onClick={() => onFavoriteClick(favorite)}> <h1>{favorite.lng}{favorite.lat}</h1> </button>

            <button onClick={() => onDeleteClick(favorite)}> <h4>Delete</h4> </button>
        </div>
    )
}