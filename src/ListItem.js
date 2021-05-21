import React, {useEffect, useState} from "react";


export default function ListItem(props) {
    const {handleSetActiveViewPort, favorite, handleUpdateFavoritesList} = props

    function onFavoriteClick(favorite) {
        handleSetActiveViewPort({
            center: [favorite.lng, favorite.lat],
            zoom: 15
        })
    }
    return (
        <div>
            {favorite.lng}{favorite.lat}
            <button onClick={() => onFavoriteClick(favorite)}/>
            This is a list
        </div>
    )
}