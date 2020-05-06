import React, {Component, useState} from "react";
import PropTypes from "prop-types";

const Form = ({addItem}) => {

    const [userName, setUserName] = useState("");

    const handleChange = ({target}) => {
        setUserName(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(userName);
        setUserName(userName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-box">
                <div className="form-box__item">
                    <input value={userName} onChange={handleChange} type="text" />
                    <button type={'submit'}>Add user</button>
                </div>
            </div>
        </form>
    )
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default Form;
