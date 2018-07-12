import React, { Component} from 'react';

export default class AlertsNoticesModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: this.props.contentToEdit.field_type || "",
            value: this.props.contentToEdit.field_value || "",
            date: this.props.contentToEdit.field_date || "",
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }


    handleDateChange(event) {
        const date = event.target.value
        this.setState({
            date: date
        })
    } 

    handleValueChange(event) {
        const value = event.target.value;
        this.setState({
            value: value
        })
    }

    handleSaveClick() {
        this.props.onSave(this.props.group, this.state.type, this.state.value, this.state.date, this.props.contentToEdit)
    }

    render() {
        return (
            <div>
                <div className="modal__header">
                    <h2>Add a notice</h2>
                </div>

                <div className="modal__body">
                    <label className="form__label">Type</label>
                    <div className="select-wrap  margin-bottom--1">
                        <select className="select" onLoad={this.state.type = "Alert"} value={this.state.type}>
                            <option>Alert</option>
                        </select>
                    </div>

                    <label className="form__label">Date</label>
                    <input type="date" className="input input__text margin-bottom--1" onChange={this.handleDateChange} value={this.state.date} />

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