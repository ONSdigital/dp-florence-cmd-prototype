import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class DatasetOptions extends Component {
    render() {
        return (
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <Link to="/" className="btn btn--link">Back</Link>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">Select a task</h1>
                    <p className="margin-bottom--1">Dataset:</p>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2><Link to="/publish-version">Publish a new edition</Link></h2>
                            <p>For publishing unreleased data.</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to="/update-version">Update an old edition</Link></h2>
                            <p>For adding alert/correction notices and updating metadata that's specific to a release.</p>
                        </li>
                        <li className="menu-list__item">
                            <h2><Link to="/dataset-metadata">Change key metadata</Link></h2>
                            <p className="margin-bottom--1">Includes title, keywords, contact details and related links.</p>
                            <p>Editing this metadata will affect all releases of this data.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
