import React, {Component, useContext} from "react";
import PropTypes from 'prop-types';
import {AppContext} from "./../App";


function Cart({item}) {

    const value = useContext(AppContext);

    return (
        <div className="cart">
            <h3>{item.name}</h3>
            <p>{item.login}</p>
            <img src={item.avatar_url} alt="avatar img" />
            <button
                className="delete-button"
                onClick={() => value.deleteItem(item.id)}
            >Delete user</button>
        </div>
    )
}

Cart.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired
    })
};

export default Cart;
