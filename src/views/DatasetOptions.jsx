import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"

export default class DatasetOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDataset: {},
        }
    }

    componentWillMount() {
        this.setState({
            selectedDataset: Data.getDatasetName(this.props.location.search.substr(12, this.props.location.search.length - 12))
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
                    <h1 className="margin-top--1 margin-bottom--1">Select a task</h1>
                    <p className="margin-bottom--1"><b> Dataset: </b> {datasetName}</p>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to={`dataset-metadata${this.props.location.search}`}>Change key metadata</Link></h2>
                            <p className="margin-bottom--1">Includes title, keywords, contact details and related links.</p>
                            <p><span className="icon icon-info" style={{position: "relative" , top: 12}}></span> Editing this metadata will affect all releases of this data.</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`publish-version${this.props.location.search}`}>Publish new data</Link></h2>
                            <p>Get new data, check the metadata and publish it to the site.</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`update-version${this.props.location.search}`}>Add alert</Link></h2>
                            <p>Add an alert notice to an existing release.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
