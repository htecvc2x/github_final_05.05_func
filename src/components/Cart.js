import React, {Component, useContext} from "react";
import PropTypes from 'prop-types';
import {AppContext} from "./../App";


function Cart(props) {

    const value = useContext(AppContext);

    return (
        <div className="cart">
            <h3>{props.item.name}</h3>
            <p>{props.item.login}</p>
            <img src={props.item.avatar_url} alt="avatar img" />
            <button
                className="delete-button"
                onClick={() => value.deleteItem(props.item.id)}
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
