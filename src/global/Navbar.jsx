import React, { Component } from 'react';
import '../scss/index.scss';

export default class NavBar extends Component {
    render() {
        return (
            <ul className="global-nav__list">
                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/publishing-queue">Collections</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/publishing-queue">Datasets</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/publishing-queue">Publishing queue</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/reports">Reports</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/users-and-access">Users and access</a>
                </li>

                <li className="global-nav__item">
                    <a className="global-nav__link" href="/florence/publishing-queue">Teams</a>
                </li>
            </ul>
        )
    }
}