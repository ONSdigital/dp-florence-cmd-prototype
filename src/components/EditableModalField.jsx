import React, { Component } from 'react';
import '../scss/index.scss';

export default class EditableModalField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    handleEditClick() {
        this.props.handleEditClick(this.props.id, this.props.group, this.props.index);
    }


    handleDeleteClick() {
        this.props.handleDeleteClick(this.props.group, this.props.index);
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        })
    }


    render() {
        return (
            <li className="menu-list__item grid">
                <div className="grid__col-lg-3">
                    <p><strong>{this.props.type}</strong></p>
                </div>
                <div className="grid__col-lg-7">
                <p>{this.props.value}</p>
                </div>
                <div className="grid__col-lg-2">
                    <p style={{"textAlign": "right"}}>
                        <span className="btn--link" onClick={this.handleEditClick}>Edit</span> |
                        <span className="btn--link" onClick={this.handleDeleteClick}>Delete</span>
                    </p>  
                </div>
            </li>
        )
    }
}
