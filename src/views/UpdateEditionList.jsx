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
        const data = new Data()
        this.setState({
            selectedDataset: data.getDatasetName(this.props.location.search.substr(12, this.props.location.search.length - 12))
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
                    <h1 className="margin-top--1 margin-bottom--1">Select old edition</h1>
                    <p className="margin-bottom--1">Dataset: {datasetName}</p>
                    <div>
                    <details className=" margin-bottom--1" >
                        <summary>What is this page?</summary>
                        <ul className="margin-left--1">
                            <li className="margin-top--1">A list of previously released editions</li>
                        </ul>
                    </details>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to={`/new-version${this.props.location.search}&version-id=02`}>May 2018 edition</Link></h2>
                            <p>Released on 16 May 2018</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`/new-version${this.props.location.search}&version-id=03`}>April 2018 edition</Link></h2>
                            <p>Released on 15 April 2018</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`/new-version${this.props.location.search}&version-id=04`}>March 2018 edition</Link></h2>
                            <p>Released on 17 March 2018</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
