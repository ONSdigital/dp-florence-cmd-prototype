import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"
import EditableField from "../components/EditableField"
import EditableModalField from "../components/EditableModalField"
import Modal from "../components/Modal"
import RelatedLinksModal from "../components/RelatedLinksModal"

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
            related_links: [
                {
                    field_id: "11",
                    field_type: "Bulletin",
                    field_value: "Consumer price inflation, UK: April 2018",
                    field_uri: "https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/april2018",
                    field_is_being_edited: false
                },
                {
                    field_id: "12",
                    field_type: "Dataset",
                    field_value: "Consumer price inflation time series",
                    field_uri: "https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/consumerpriceindices",
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

    handleModalSaveClick(group, type, value, uri, isEditing) {
        let newState;
        if (!isEditing.field_id) {
            const id = (this.state.metadata.length + this.state.contact_details.length + this.state.related_links.length + 1).toString();
            const newItem = {
                field_id: id,
                field_type: type,
                field_value: value,
                field_uri: uri,
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
            field.field_uri = uri;
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
                    <h1 className="margin-top--1 margin-bottom--1">Change key metadata</h1>
                    <p className="margin-bottom--1">Dataset: {datasetName}</p>

                    <div>
                    <details className=" margin-bottom--1" >
                        <summary>What is this page?</summary>
                        <ul className="margin-left--1">
                            <li className="margin-top--1">This page contains key information about the dataset</li>
                            <li className="margin-top--1">Editing this metadata will affect all releases of this data</li>
                        </ul>
                    </details>
                    </div>

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
                    <ul className="menu-list">
                        {this.state.contact_details.map((field, index) => {
                                return (
                                    <EditableField 
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        title={field.field_title} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"contact_details"}
                                        handleEditClick={this.handleEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                    />
                                )
                        })}
                    </ul>

                    <h2 className="margin-top--3 margin-bottom--1">Related links</h2>
                    <ul className="menu-list margin-bottom--1">
                        {this.state.related_links.map((field, index) => {
                                return (
                                    <EditableModalField
                                        key={field.field_id}
                                        index={index}
                                        id={field.field_id} 
                                        type={field.field_type} 
                                        value={field.field_value} 
                                        is_being_edited={field.field_is_being_edited}
                                        group={"related_links"}
                                        handleEditClick={this.handleModalEditClick}
                                        handleSaveClick={this.handleSaveClick}
                                        handleDeleteClick={this.handleDeleteClick}
                                    />
                                )
                        })}
                    </ul>
                    <p className="btn btn--link margin-bottom--3" onClick={this.handleCreateClick}>Add a related link</p>
                    <div>
                        <Link to={"preview"} className="btn btn--primary margin-bottom--5">Save and continue</Link>
                    </div>
                </div>
                {this.state.showModal ? 
                    <Modal sizeClass="grid__col-3">
                        <RelatedLinksModal 
                            group="related_links" 
                            contentToEdit={this.state.content_to_edit} 
                            onSave={this.handleModalSaveClick} 
                            onCancel={this.handleModalCancelClick}/>
                    </Modal>
                : ""}
            </div>
        )
    }
}
