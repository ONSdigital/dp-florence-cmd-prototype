import React, { Component} from 'react';

export default class EditableModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: this.props.contentToEdit.field_type || "",
            value: this.props.contentToEdit.field_value || "",
            uri: this.props.contentToEdit.field_uri || "",
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleUriChange = this.handleUriChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleTypeChange(event) {
        const type = event.target.value
        this.setState({
            type: type
        })
    } 

    handleUriChange(event) {
        const uri = event.target.value
        this.setState({
            uri: uri
        })
    } 

    handleValueChange(event) {
        const value = event.target.value
        this.setState({
            value: value
        })
    }

    handleSaveClick() {
        this.props.onSave(this.props.group, this.state.type, this.state.value, this.state.uri, this.props.contentToEdit)
    }

    render() {
        return (
            <div>
                <div className="modal__header">
                    <h2>Add a related link</h2>
                </div>

                <div className="modal__body">
                    <label className="form__label">URL</label>
                    <input className="input input__text margin-bottom--2" onChange={this.handleUriChange} value={this.state.uri}/>

                    <label className="form__label">Title</label>
                    <input className="input input__text margin-bottom--2" onChange={this.handleValueChange} value={this.state.value}/>
                </div>


                <div className="modal__footer">
                    <button type="button" className={"btn btn--primary btn--margin-right"} onClick={this.handleSaveClick}>Add</button>
                    <button type="button" className="btn" onClick={this.props.onCancel}>Cancel</button>
                </div>
            </div>
        )
    }
}