import React from "react";
import {Button, List} from 'semantic-ui-react'
import PropTypes from "prop-types";

export default function ListItem(props) {
    const {handleSetActiveViewPort, favorite, handleUpdateFavoritesList } = props

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
                <List.Header as='a' onClick={() => onFavoriteClick(favorite)}> {favorite.text}
                </List.Header>

                <List.Description>
                    {favorite.place_name}
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