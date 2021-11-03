import React from "react";
import AddTodo from "../todo/addTodo";
import "./Modal.css"
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})} className="addtodo"><img src="https://cdn.iconscout.com/icon/free/png-256/add-user-2-457816.png" className="adduser"></img></button>

                {this.state.isOpen && (<div className="modal">
                    <div className="modal-body">
                        <button onClick={() => this.setState({isOpen: false})}>Close Modal</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}