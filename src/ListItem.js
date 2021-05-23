import React, {useEffect, useState} from "react";
import {Button, List} from 'semantic-ui-react'


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
        <List.Item>
            <List.Content>
                <List.Header as='a' onClick={() => onFavoriteClick(favorite)}>{favorite.lng} / {favorite.lat}>
                </List.Header>
                <List.Description>
                    <Button onClick={() => onDeleteClick(favorite)}>Delete</Button>
                </List.Description>
            </List.Content>



        </List.Item>
    )
}