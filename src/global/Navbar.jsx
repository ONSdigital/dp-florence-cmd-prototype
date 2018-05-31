import React, { Component } from 'react';
import '../scss/index.scss';

export default class NavBar extends Component {
    render() {
        return (
            <ul className="global-nav__list">
                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Collections</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Datasets</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Publishing queue</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Reports</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Users and access</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/">Teams</a>
                </li>
            </ul>
        )
    }
}