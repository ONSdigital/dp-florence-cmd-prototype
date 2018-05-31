import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class Collection extends Component {
    render() {
        return (
            <div>
                <div className="grid grid--justify-space-around">
                    <div className="grid__col-4">
                        <h1>Select a collection</h1>
                        <div className="selectable-box">
                            <div className="grid">
                                <h2 className="selectable-box__heading grid__col-6">Name</h2>
                                <h2 className="selectable-box__heading grid__col-6 grid__cell">Publish date</h2>
                            </div>
                            <ul id="selectable-box" className="selectable-box__list">
                                <li id="00mycollection-a880d4216a0e436cfb6276b3de6f5fb0687e11fa518de83f8ec8d147beacd8cb" className="selectable-box__item selected">
                                    <div className="grid">
                                        <div className="grid__col-6">CPIH dataset</div>
                                        <div className="grid__col-6">[manual collection]</div>
                                    </div>
                                </li>
                                <li id="benjytest-d5217cd15054ad9c3fb17652a9a9c015c6178c8f5bfea4aaa063be62a74c97ec" className="selectable-box__item">
                                    <div className="grid">
                                        <div className="grid__col-6">Collection 01</div>
                                        <div className="grid__col-6">[manual collection]</div>
                                    </div>
                                </li>
                                <li id="cpih-e81e250e3642afd196cb8d169106aa95db9f6510ea581ad3759c52d50ac08d26" className="selectable-box__item">
                                    <div className="grid">
                                        <div className="grid__col-6"> Collection 02</div>
                                        <div className="grid__col-6">[manual collection]</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid__col-4">&nbsp</div>
                    <div className="drawer visible">
                        <div className="drawer__container">
                            <div className="drawer__heading">
                                <div className="grid grid--justify-space-between grid--align-end"><div>
                                    <h2>CPIH dataset</h2><p>Manual publish</p>
                                </div>
                                <a className="colour--cadet-blue font-size--16" href="/florence/collections/cpihdataset-6bf24c2b99514c4b33bb7dcebbfedff5bd0d9c679754abb1c325fb6aaf1ff1a8/edit">Edit</a>
                            </div>
                        </div>
                        <div className="drawer__banner">
                            <a href="/florence/workspace?collection=cpihdataset-6bf24c2b99514c4b33bb7dcebbfedff5bd0d9c679754abb1c325fb6aaf1ff1a8" className="btn btn--primary">Create/edit page</a>
                            <Link className="btn btn--primary btn--margin-left" to="/datasets">Add imported dataset</Link>
                            <button className="btn btn--margin-left">Restore page</button>
                        </div>
                        <div className="drawer__body">
                            <div>
                                <h3 className="margin-bottom--1">0 pages in progress</h3>
                                <p className="margin-bottom--2">No pages in progress</p>
                                <h3 className="margin-bottom--1">0 pages awaiting review</h3>
                                <p className="margin-bottom--2">No pages awaiting review</p>
                                <h3 className="margin-bottom--1">0 reviewed pages</h3>
                                <p className="margin-bottom--2">No reviewed pages</p>
                            </div>
                        </div>
                        <div className="drawer__footer">
                        <button className="btn" type="button">Close</button>
                        <button className="btn btn--warning btn--margin-left" type="button" id="delete-collection">Delete</button>
                        </div>
                    </div>
                </div></div></div>
                )
            }
        }
