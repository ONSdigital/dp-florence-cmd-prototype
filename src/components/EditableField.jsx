import React, { Component } from 'react';
import '../scss/index.scss';

export default class DatasetMetadata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    handleEditClick() {
        this.props.handleEditClick(this.props.id, this.props.group, this.props.index);
    }

    handleSaveClick() {
        this.props.handleSaveClick(this.props.id, this.props.group, this.props.index);
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
                    <p><strong>{this.props.title}</strong></p>
                </div>
                <div className="grid__col-lg-8">
                <input 
                    className={"" + (this.props.is_being_edited ? "input" : "basic-input")}
                    onChange={this.handleInputChange}
                    value={this.state.value}
                    readOnly={!this.props.is_being_edited}
                />
                </div>
                <div className="grid__col-lg-1">
                {this.props.is_being_edited ? 
                    <p style={{"textAlign": "right"}} className="btn--link" onClick={this.handleSaveClick}>Save</p> : 
                    <p style={{"textAlign": "right"}} className="btn--link" onClick={this.handleEditClick}>Edit</p> 
                }
                </div>
            </li>
        )
    }
}
