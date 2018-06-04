import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"

export default class DatasetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datasets: [],
            filteredDatasets: []
        }

        this.handleSearch = this.handleSearch.bind(this)

    }

    componentWillMount() {
        const data = new Data()
        this.setState({
            datasets: data.getDatasetNamesAndLastUpdated()
        })
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredDatasets = this.state.datasets.filter(dataset => {
            return dataset.name.toLowerCase().search(searchTerm) !== -1
        });
        this.setState({
            filteredDatasets: filteredDatasets
        });
    }

    render() {
        const datasets = this.state.filteredDatasets.length ? this.state.filteredDatasets : this.state.datasets;
        return (
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <a onClick={this.props.history.goBack} className="btn btn--link">Back</a>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">Select a dataset</h1>
                    <div className="grid__col-lg-7">
                        <label className="form__label">Search by dataset title</label>
                        <input className="input input__text margin-bottom--2" placeholder="E.g. Consumer prices" onChange={this.handleSearch}/>
                    </div>
                    <ul className="menu-list">
                        {datasets.map((dataset, index) => {
                            return (
                                <li key={index} className="menu-list__item">
                                    <h2><Link to={`/dataset-options?dataset-id=${dataset.id}`}>{dataset.name}</Link></h2>
                                    <p>{dataset.lastUpdated}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
