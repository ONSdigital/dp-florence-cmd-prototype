import React, { Component} from 'react';

export default class Modal extends Component {
    render() {
        return (
            <div className="modal__overlay">
                <div className={"modal__inner " + this.props.sizeClass}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}