import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"

export default class NewEditionList extends Component {
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
                    <h1 className="margin-top--1 margin-bottom--1">Select edition</h1>
                    <p className="margin-bottom--1">Dataset: {datasetName}</p>
                    <div>
                    <details className=" margin-bottom--1" >
                        <summary>What is this page?</summary>
                        <ul className="margin-left--1">
                            <li className="margin-top--1">A list of editions that are ready to be released</li>
                            <li className="margin-top--1">Select one to check and update the metadata</li>
                        </ul>
                    </details>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to={`new-version${this.props.location.search}&version-id=01`}>June 2018 edition</Link></h2>
                            <p>Never released <span className="font-color--iron">|</span> Updated today at 8:44am</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`new-version${this.props.location.search}&version-id=01`}>June 2018 edition</Link></h2>
                            <p>Never released <span className="font-color--iron">|</span> Updated yesterday at 4:48pm</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
