import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <ul className="global-nav__list">
                <li className="global-nav__item">
                    <Link className="global-nav__link" to="collections">Collections</Link>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link">Datasets</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link">Publishing queue</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link">Reports</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link">Users and access</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link">Teams</a>
                </li>
            </ul>
        )
    }
}