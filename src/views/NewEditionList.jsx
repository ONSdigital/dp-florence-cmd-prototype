import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";
import Data from "../Data"
import Modal from "../components/Modal"
import ConfirmEdition from "../components/ConfirmEdition"

export default class NewEditionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDataset: {},
            showModal: false,
            versionId: "0",
            editionId: "0",
        }
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleCreateClick2 = this.handleCreateClick2.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedDataset: Data.getDatasetName(this.props.location.search.substr(12, this.props.location.search.length - 12))
        })
    }

    handleCreateClick(event) {
        this.setState({
            showModal: true,
            edition: event.target.innerHTML,
            versionId: "0",
            editionId: "0",
            
        }) 
    }

    handleCreateClick2(event) {
        this.setState({
            showModal: true,
            edition: event.target.innerHTML,
            versionId: "0",
            editionId: "1",
            
        }) 
    }

    handleModalClose(){
        this.setState({
            showModal: false,
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
                    <h1 className="margin-top--1 margin-bottom--1">Publish new data</h1>
                    <p className="margin-bottom--1"><b>Dataset:</b> {datasetName}</p>
                    <ul className="menu-list">
                        <li className="menu-list__item">
                            <h2  id="0" className="btn--link" onClick={this.handleCreateClick}>June 2018 edition</h2>
                            <p>Not released yet <br/> june2018_v1.xlsx <br/> Updated today at 8:44am</p>
                        </li>
                        <li className="menu-list__item">
                            <h2  id="1" className="btn--link" onClick={this.handleCreateClick2}>June 2018 edition</h2>
                            <p>Not released yet <br/> june2018_v1-1.xlsx <br/> Updated yesterday at 4:48pm</p>
                        </li>
                    </ul>
                </div>
                {this.state.showModal ? 
                    <Modal sizeClass="grid__col-6">
                    <ConfirmEdition
                    datasetName={datasetName}
                    edition={this.state.edition}
                    location={`new-version${this.props.location.search}&version-id=${this.state.versionId}&edition-id=${this.state.editionId}`}
                    closeModal={this.handleModalClose}/>
                    </Modal>
                : ""}
            </div>
        )
    }
}
