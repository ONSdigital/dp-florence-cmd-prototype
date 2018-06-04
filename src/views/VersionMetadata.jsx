import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"
import EditableField from "../components/EditableField"
import EditableModalField from "../components/EditableModalField"
import Modal from "../components/Modal"
import NoticesModal from "../components/NoticesModal"

export default class VersionMetadata extends Component {
    constructor(props) {
        super(props)

        this.state = {
            metadata: [
                {
                    field_id: "01",
                    field_title: "Edition",
                    field_value: "June 2018",
                    field_is_being_edited: false
                },
                {
                    field_id: "02",
                    field_title: "Release date",
                    field_value: "18 June 2018",
                    field_is_being_edited: false
                },
                {
                    field_id: "03",
                    field_title: "Next release date",
                    field_value: "18 July 2018",
                    field_is_being_edited: false
                },
            ],
            in_this_dateset: [
                {
                    field_id: "08",
                    field_title: "Good and services",
                    field_value: "No description provided.",
                    field_is_being_edited: false
                },
                {
                    field_id: "09",
                    field_title: "Geographic areas",
                    field_value: "Provides data at national level for the United Kingdom only. No breakdown of this data to smaller areas is available.",
                    field_is_being_edited: false
                },
                {
                    field_id: "10",
                    field_title: "Time",
                    field_value: "Includes the complete available monthly time series for CPIH. Yearly and quarterly data are also available from the main ONS website.",
                    field_is_being_edited: false
                },
            ],
            notices: [
                {
                    field_id: "11",
                    field_type: "Alert",
                    field_date: "2018-05-22",
                    field_value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                    field_is_being_edited: false
                },
                {
                    field_id: "12",
                    field_type: "Correction",
                    field_date: "2018-05-13",
                    field_value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                    field_is_being_edited: false
                },
            ],
            content_to_edit: {},
            showModal: false,
            selectedDataset: {}
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleModalEditClick = this.handleModalEditClick.bind(this);
        this.handleModalCancelClick = this.handleModalCancelClick.bind(this);
        this.handleModalSaveClick = this.handleModalSaveClick.bind(this);
    }

    componentWillMount() {
        const data = new Data()
        this.setState({
            selectedDataset: data.getDatasetName(this.props.location.search.substr(12, this.props.location.search.length - 12))
        })
    }

    handleEditClick(id, group, index) {
        const field = this.state[group].find(field => {
            return field.field_id === id
        })
        field.field_is_being_edited = true;
        const newState = this.state[group]
        newState.splice(index, 1, field);
        this.setState({
            [group]: newState,

        });
    }

    handleSaveClick(id, group, index, newValue) {
        const field = this.state[group].find(field => {
            return field.field_id === id
        })
        field.field_is_being_edited = false;
        field.field_value = newValue;
        const newState = this.state[group];
        newState.splice(index, 1, field);
        this.setState({
            [group]: newState
        })
    }

    handleCreateClick() {
        this.setState({
            showModal: true
        })
    }

    handleModalEditClick(id, group, index) {
        const field = this.state[group].find(field => {
            return field.field_id === id
        })
        field.field_is_being_edited = true;
        const newState = this.state[group]
        newState.splice(index, 1, field);
        this.setState({
            [group]: newState,
            content_to_edit: {index: index, ...field},
            showModal: true
        });
    }

    handleModalSaveClick(group, type, value, date, isEditing) {
        console.log(group, type, value, date, isEditing)
        let newState;
        if (!isEditing.field_id) {
            const id = (this.state.metadata.length + this.state.in_this_dateset.length + this.state.notices.length + 1).toString();
            const newItem = {
                field_id: id,
                field_type: type,
                field_value: value,
                field_date: date,
                field_is_being_edited: false
            }
            newState = [...this.state[group]];
            newState.push(newItem);
        } else {
            const field = this.state[group].find(field => {
                return field.field_id === isEditing.field_id
            })
            field.field_is_being_edited = false;
            field.field_type = type;
            field.field_value = value;
            field.field_date = date;
            newState = this.state[group];
            newState.splice(isEditing.index, 1, field);
        }

        this.setState({
            [group]: newState,
            showModal: false,
            content_to_edit: {}
        })
    }

    handleModalCancelClick() {
        this.setState({
            showModal: false,
            content_to_edit: {}
        })
    }

    handleDeleteClick(group, index) {
        const newState = this.state[group];
        newState.splice(index, 1);
        this.setState({
            [group]: newState
        })
    }

    render() {
        const datasetName = this.state.selectedDataset ? this.state.selectedDataset.name : "";
        return (
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <a onClick={this.props.history.goBack} className="btn btn--link">Back</a>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">New edition metadata</h1>
                    <p className="margin-bottom--1">Dataset: {datasetName}</p>

                    <h2 className="margin-bottom--1">Metadata for this edition</h2>
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

                    <h2 className="margin-top--3 margin-bottom--1">Notices</h2>
                    <ul className="menu-list margin-bottom--1">
                        {this.state.notices.map((field, index) => {
                                return (
                                    <EditableModalField
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        type={field.field_type} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"notices"}
                                        handleEditClick={this.handleModalEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                        handleDeleteClick={this.handleDeleteClick}
                                    />
                                )
                        })}
                    </ul>
                    <p className="btn btn--link" onClick={this.handleCreateClick}>Add a notice</p>

                    <h2 className="margin-top--3 margin-bottom--1">In this dataset</h2>
                    <ul className="menu-list margin-bottom--3">
                        {this.state.in_this_dateset.map((field, index) => {
                                return (
                                    <EditableField 
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        title={field.field_title} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"in_this_dataset"}
                                        handleEditClick={this.handleEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                    />
                                )
                        })}
                    </ul>

                    <div>
                        <Link to={"/preview"} className="btn btn--primary margin-bottom--5">Save and continue</Link>
                    </div>
                </div>
                {this.state.showModal ? 
                    <Modal sizeClass="grid__col-3">
                        <NoticesModal 
                            group="notices" 
                            contentToEdit={this.state.content_to_edit} 
                            onSave={this.handleModalSaveClick} 
                            onCancel={this.handleModalCancelClick}/>
                    </Modal>
                : ""}
            </div>
        )
    }
}
