import React from "react";
import ListItem from "./ListItem";
import {List} from "semantic-ui-react";
import PropTypes from "prop-types";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort, favoriteList, handleUpdateFavoritesList} = props

    return (
        <List>
            <h2> Favorites</h2>
            { favoriteList && favoriteList.map((favorite, index) =>
                <ListItem key={index} handleSetActiveViewPort={handleSetActiveViewPort} favorite={favorite}
                          handleUpdateFavoritesList={handleUpdateFavoritesList}/>
            )}
        </List>
    )
}

FavoriteList.propTypes = {
    favoriteList: PropTypes.array.isRequired,
    handleUpdateFavoritesList: PropTypes.func.isRequired,
    handleSetActiveViewPort: PropTypes.func.isRequired,
}

FavoriteList.defaultProps = {
    favoriteList: [],
    handleUpdateFavoritesList: () => {},
    handleSetActiveViewPort: () => {}
}