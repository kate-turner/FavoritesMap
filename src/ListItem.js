import React from "react";
import {Button, List} from 'semantic-ui-react'
import PropTypes from "prop-types";

export default function ListItem(props) {
    const {handleSetActiveViewPort, favorite, handleUpdateFavoritesList } = props

    const favoriteHeader = favorite.text ? favorite.text : `${favorite.lat}/${favorite.lng}`
    const favoriteDescription = favorite.place_name ? favorite.place_name : null

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
                <List.Header as='a' onClick={() => onFavoriteClick(favorite)}> {favoriteHeader}
                </List.Header>

                <List.Description>
                    {favoriteDescription}
                </List.Description>
                <List.Description>
                    <Button onClick={() => onDeleteClick(favorite)}>Delete</Button>
                </List.Description>
            </List.Content>
        </List.Item>

    )
}

ListItem.propTypes = {
    favorite: PropTypes.object.isRequired,
    handleUpdateFavoritesList: PropTypes.func.isRequired,
    handleSetActiveViewPort: PropTypes.func.isRequired,
}

ListItem.defaultProps = {
    favorite: {},
    handleUpdateFavoritesList: () => {},
    handleSetActiveViewPort: () => {}
}