import React, {Component} from "react";
import Cart from "./Cart";
import PropTypes from 'prop-types';


const CartList = (props) => {

    return (
        <div className="cart-box">
            { props.items.map(item => <Cart key={item.id} item={item}/>) }
        </div>
    )
}

CartList.propTypes = {
    items: PropTypes.array.isRequired
}

CartList.defaultProps = {
    items: []
}

export default CartList;
