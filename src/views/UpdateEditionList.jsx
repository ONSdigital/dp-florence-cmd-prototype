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
                    <h1 className="margin-top--1 margin-bottom--1">Add alert</h1>
                    <p className="margin-bottom--1"><b>Dataset:</b> {datasetName}</p>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to={`add-alert${this.props.location.search}&version-id=1&edition-id=0`}>May 2018 edition v1.0</Link></h2>
                            <p>Released on 16 May 2018</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`add-alert${this.props.location.search}&version-id=2&edition-id=1`}>April 2018 edition v1.1</Link></h2>
                            <p>Released on 15 April 2018<br/>Updated on 21 April 2018</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to={`add-alert${this.props.location.search}&version-id=3&edition-id=0`}>March 2018 edition v1.0</Link></h2>
                            <p>Released on 17 March 2018</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
