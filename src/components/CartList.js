import React, {Component} from "react";
import Cart from "./Cart";
import PropTypes from 'prop-types';


export default class CartList extends Component {

    render() {
        return (
            <div className="cart-box">
                { this.props.items.map(item => <Cart key={item.id} item={item}/>) }
            </div>
        )
    }
}

CartList.propTypes = {
    items: PropTypes.array.isRequired
}

CartList.defaultProps = {
    items: []
}