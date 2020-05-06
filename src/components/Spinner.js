import React, {Component} from "react";
import PropTypes from 'prop-types';

import './Spinner.css'

export default class Spinner extends Component {
    render() {
        const {loading} = this.props;

        let styleDisplay = 'none';
        if (loading) {
            styleDisplay = 'block';
        }

        return (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,.8)",
                    height: "100vh",
                    width: "100%",
                    display: styleDisplay
                }}
            >
                <div
                    style={{ position: "absolute", top: "50%", left: "50%" }}
                    alt="Spinner loader"
                    className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

Spinner.defaultProps = {
      loading : false
};

Spinner.propTypes = {
      loading : PropTypes.bool
};

