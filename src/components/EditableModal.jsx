import React, { Component} from 'react';

export default class EditableModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: this.props.contentToEdit.field_type || "",
            fieldOne: this.props.contentToEdit.field_value || "",
            fieldTwo: this.props.contentToEdit.field_uri || "",
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleFieldOneChange = this.handleFieldOneChange.bind(this);
        this.handleFieldTwoChange = this.handleFieldTwoChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleTypeChange(event) {
        const type = event.target.value
        this.setState({
            type: type
        })
    } 

    handleFieldOneChange(event) {
        const newFieldOne = event.target.value
        this.setState({
            fieldOne: newFieldOne
        })
    } 

    handleFieldTwoChange(event) {
        const newFieldTwo = event.target.value
        this.setState({
            fieldTwo: newFieldTwo
        })
    }

    handleSaveClick() {
        this.props.onSave(this.props.group, this.state.type, this.state.fieldTwo, this.state.fieldOne, this.props.contentToEdit)
    }

    render() {
        return (
            <div>
                <div className="modal__header">
                    <h2>{this.props.modalTitle}</h2>
                </div>

                <div className="modal__body">
                    <label className="form__label">{this.props.fieldOne.title}</label>
                    <input className="input input__text margin-bottom--2" type={this.props.fieldOne.type} onChange={this.handleFieldOneChange} value={this.state.uri}/>

                    <label className="form__label">{this.props.fieldTwo.title}</label>
                    <input className="input input__text margin-bottom--2" type={this.props.fieldTwo.type} onChange={this.handleFieldTwoChange} value={this.state.value}/>
                </div>

                <div className="modal__footer">
                    <button type="button" className={"btn btn--primary btn--margin-right"} onClick={this.handleSaveClick}>Add</button>
                    <button type="button" className="btn" onClick={this.props.onCancel}>Cancel</button>
                </div>
            </div>
        )
    }
}