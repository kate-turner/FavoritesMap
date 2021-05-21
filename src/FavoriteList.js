import React, {useEffect, useState} from "react";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort, favoriteList, handleUpdateFavoritesList} = props

    function onFavoriteClick() {
        handleSetActiveViewPort({
            center: [-119.346062, 37.247339],
            zoom: 15
        })
    }
    return (
        <div>
            {favoriteList.map((favorite) => favorite.lng)}
            <button onClick={onFavoriteClick}/>
            This is a list
        </div>
    )
}