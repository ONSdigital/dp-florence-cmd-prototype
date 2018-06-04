import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class NewEditionList extends Component {
    render() {
        return (
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <Link to="/dataset-options" className="btn btn--link">Back</Link>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">Select edition</h1>
                    <p className="margin-bottom--1">Dataset:</p>
                    <div>
                    <details className=" margin-bottom--1" >
                        <summary>What is this page?</summary>
                        <p>test</p>
                    </details>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to={`/new-version${this.props.location.search}`}>June 2018 edition</Link></h2>
                            <p>Never released <span className="font-color--iron">|</span> Updated today at 8:44am</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
