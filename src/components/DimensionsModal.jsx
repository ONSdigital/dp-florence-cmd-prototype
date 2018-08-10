import React, { Component} from 'react';

export default class NoticesModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.contentToEdit.field_title || "",
            value: this.props.contentToEdit.field_value || "",
            date: this.props.contentToEdit.field_date || "",
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleNameChange(event) {
        const name = event.target.value
        this.setState({
            name: name
        })
    } 

    handleValueChange(event) {
        const value = event.target.value;
        this.setState({
            value: value
        })
    }

    handleSaveClick() {
        this.props.onSave(this.props.group, this.state.name, this.state.value, this.state.date, this.props.contentToEdit)
    }

    render() {
        return (
            <div>
                <div className="modal__header">
                    <h2>Update a {this.props.modalName}</h2>
                </div>

                <div className="modal__body">
                <label className="form__label">Name</label>
                    <input type="name" className="input input__text margin-bottom--1" onChange={this.handleNameChange} value={this.state.name} />

                    <label className="form__label">Description</label>
                    <textarea style={{"height": "150px"}} onChange={this.handleValueChange} className="input input__text" value={this.state.value}></textarea>
                </div>


                <div className="modal__footer">
                    <button type="button" className={"btn btn--primary btn--margin-right"} onClick={this.handleSaveClick}>Add</button>
                    <button type="button" className="btn" onClick={this.props.onCancel}>Cancel</button>
                </div>
            </div>
        )
    }
}