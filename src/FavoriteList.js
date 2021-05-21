import React, {useEffect, useState} from "react";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort} = props

    function onFavoriteClick() {
        handleSetActiveViewPort({
            center: [-119.346062, 37.247339],
            zoom: 15
        })
    }
    return (
        <div>
            <button onClick={onFavoriteClick}/>
            This is a list
        </div>
    )
}