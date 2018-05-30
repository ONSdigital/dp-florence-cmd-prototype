import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import EditableField from "../components/EditableField"

export default class DatasetMetadata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            metadata: [
                {
                    field_id: "01",
                    field_title: "Title",
                    field_value: "Consumer Prices Index including owner occupiers' housing costs (CPIH)",
                    field_is_being_edited: false
                },
                {
                    field_id: "02",
                    field_title: "ID",
                    field_value: "CPIH01",
                    field_is_being_edited: false
                },
                {
                    field_id: "03",
                    field_title: "About this dataset",
                    field_value: "CPIH is the most comprehensive measure of inflation. It extends CPI to include a measure of the costs associated with owning, maintaining and living in one's own home, known as owner occupiers' housing costs (OOH), along with council tax. This dataset provides CPIH time series (2005 to latest published month), allowing users to customise their own selection, view or download.",
                    field_is_being_edited: false
                },
                {
                    field_id: "04",
                    field_title: "Keywords",
                    field_value: "Inflation",
                    field_is_being_edited: false
                },
                {
                    field_id: "05",
                    field_title: "National Statistic",
                    field_value: "Yes",
                    field_is_being_edited: false
                },
                {
                    field_id: "06",
                    field_title: "Release frequency",
                    field_value: "Monthly",
                    field_is_being_edited: false
                },
                {
                    field_id: "07",
                    field_title: "Usuage infomation",
                    field_value: "Open Government Licence v3.0",
                    field_is_being_edited: false
                },
            ],
            contact_details: [
                {
                    field_id: "08",
                    field_title: "Contact name",
                    field_value: "James Tucker",
                    field_is_being_edited: false
                },
                {
                    field_id: "09",
                    field_title: "Contact email",
                    field_value: "cpi@ons.gov.uk",
                    field_is_being_edited: false
                },
                {
                    field_id: "10",
                    field_title: "Contact telephone",
                    field_value: "+44 (0)1633 456900",
                    field_is_being_edited: false
                },
            ],
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleEditClick(id, group, index) {
        const field = this.state[group].find(field => {
            return field.field_id === id
        })
        field.field_is_being_edited = true;
        const newState = this.state[group]
        newState.splice(index, 1, field);
        this.setState({
            metadata: newState
        })
    }

    handleSaveClick(id, group, index, newValue) {
        const field = this.state[group].find(field => {
            return field.field_id === id
        })
        field.field_is_being_edited = false;
        field.field_value = newValue;
        const newState = this.state[group]
        newState.splice(index, 1, field);
        this.setState({
            metadata: newState
        })
    }

    render() {
        return (
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <Link to="/dataset-options" className="btn btn--link">Back</Link>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">Change key metadata</h1>
                    <p className="margin-bottom--1">Dataset:</p>

                    <h2 className="margin-bottom--1">Metadata for this dataset</h2>
                    <ul className="menu-list">
                        {this.state.metadata.map((field, index) => {
                                return (
                                    <EditableField 
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        title={field.field_title} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"metadata"}
                                        handleEditClick={this.handleEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                    />
                                )
                        })}
                    </ul>

                    <h2 className="margin-top--3 margin-bottom--1">Contact details</h2>
                    <ul className="menu-list margin-bottom--5">
                        {this.state.contact_details.map((field, index) => {
                                return (
                                    <EditableField 
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        title={field.field_title} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"metadata"}
                                        handleEditClick={this.handleEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                    />
                                )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
