import React, { Component } from 'react';
import '../scss/index.scss';
import { Link } from "react-router-dom";

export default class ConfirmEdition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDataset: {},
            radioValue:false,
        }
        this.handelRadioClick = this.handelRadioClick.bind(this);
    }

    handelRadioClick(event) {
        if (event.target.value === "yes") {
            this.setState ({radioValue: true})
            return;
        }
        this.setState ({radioValue: false})
    }

    render() {
        return (
            <div className="margin--1" id="editionform">
                <h2>Is this edition correct?</h2>
                <p><b>Dataset: </b>{this.props.datasetName}</p><br/>
                <h2>{this.props.edition}</h2>
                <div className="margin-bottom--1"><input style={{marginRight: 8}} id="correct-edition-yes" name="correct-edition" type="radio" value="yes" required onClick={this.handelRadioClick}/>
                <label htmlFor="correct-edition-yes">Yes</label></div>
                <div className="margin-bottom--1"><input style={{marginRight: 8}} id="correct-edition-no" name="correct-edition" type="radio" value="no" required onClick={this.handelRadioClick}/>
                <label htmlFor="correct-edition-no">No</label></div><br/>
                {this.state.radioValue ? 
                <Link to={this.props.location} className="btn btn--positive" id="Save">Save and continue</Link>
                : <button onClick={this.props.closeModal} className="btn btn--positive" id="Save">Save and continue</button>}
            </div>
        )
    }
}