import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        userName: ""
    }

    handleChange({ target }) {
        this.setState({ userName: target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.userName)
        this.setState({ userName: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-box">
                    <div className="form-box__item">
                        <input value={this.state.userName} onChange={this.handleChange} type="text" />
                        <button type={'submit'}>Add user</button>
                    </div>
                </div>
            </form>
        )
    }
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired
}