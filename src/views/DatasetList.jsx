import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class DatasetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datasets: [
                { 
                    name: "Consumer Prices Index including owner occupiers' housing costs (CPIH)",
                    lastUpdated: "Updated today at 8:44am"
                },
                { 
                    name: "Annual Summary of Hours Worked, Place of Work by Local Authority",
                    lastUpdated: "Updated yesterday at 3:15pm"
                },
                { 
                    name: "Population estimates for UK, England and Wales, Scotland and Northern Ireland",
                    lastUpdated: "Updated 16 May 2018 at 5:45pm"
                },
                { 
                    name: "International Passenger Survey 4.01, citizenship group by sex by age by country of last or next residence",
                    lastUpdated: "Updated 1 May 2018 at 1:45pm"
                },
                { 
                    name: "Personal crime by accomodation",
                    lastUpdated: "Updated 29 April 2018 at 10:45am"
                },
            ],
            filteredDatasets: []
        }

        this.handleSearch = this.handleSearch.bind(this)

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
                        &#9664; <button type="button" className="btn btn--link">Back</button>
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
                                    <h2><Link to={`/dataset-options`}>{dataset.name}</Link></h2>
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
