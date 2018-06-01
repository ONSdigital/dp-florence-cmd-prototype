import React, { Component } from 'react';
import '../scss/index.scss';

class Preview extends Component {
  render() {
    return (
        <div>
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--2">
                        &#9664; <a onClick={this.props.history.goBack} className="btn btn--link">Back</a>
                    </div>
                    <h1 className="margin-top--1 margin-bottom--1">Preview</h1>
                </div>
            </div>
            <iframe src="../Consumer-Prices-Index.htm" title="ONS website preview" className="iframe--preview" width="100%" height="80vh"></iframe>
            <div className="grid grid--justify-center">
                <div className="grid__col-xs-10 grid__col-md-8 grid__col-lg-6">
                    <div className="margin-top--1">
                        <button type="submit" className="btn btn--primary margin-bottom--1" >Save</button>
                        <span className="margin-left--1"><a href="/Collections" id="submit-for-review" className="btn btn--positive">Save and submit for review</a></span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Preview;
