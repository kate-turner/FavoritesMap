import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";
import {List} from "semantic-ui-react";
import PropTypes from "prop-types";


export default function FavoriteList(props) {
    const {handleSetActiveViewPort, favoriteList, handleUpdateFavoritesList} = props
    const [dropdownList, setDropdownList] = useState([]);
    const [activeType, setActiveType] = useState("")

    useEffect(() => {
        generateDropdownList()
    }, [favoriteList])

    function generateDropdownList() {
        favoriteList && favoriteList.map(favorite => {
            const type = favorite.category
            if (!dropdownList.includes(type)) {
                setDropdownList(dropdownList => [type, ...dropdownList])
            }
        })
    }

    function handleDropdownTypeChange(e) {
        const val = e.target.value;
        setActiveType(val)
    }

    return (
        <List style={{maxHeight: '100vh', overflow: 'auto'}} divided>
            <h2>Favorites</h2>
            <select name='Poi Type' id='poi-type' onChange={handleDropdownTypeChange}>
                <option value="">Choose POI Type</option>
                <option value={"DEFAULT_ALL"}>Select All</option>
                {dropdownList.map((dropdown, index) => {
                    return <option key={index} value={dropdown}>{dropdown}</option>
                })}
            </select>
            {favoriteList && favoriteList.filter(favorite => favorite.category === activeType || activeType === "DEFAULT_ALL").map((favorite, index) =>
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
    handleUpdateFavoritesList: () => {
    },
    handleSetActiveViewPort: () => {
    }
}