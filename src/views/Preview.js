import React, { Component } from 'react';
import '../scss/index.scss';

class Preview extends Component {
  render() {
    return (
        <form className="margin-left--3 margin-right--3">
        <h1 className="wrapper margin-top--1 margin-left--1">Preview</h1>
        <div className="margin-left--1"> &#9664; <a className="btn btn--link " href="javascript:history.back()">Back</a></div>
        <iframe className="margin-bottom--1 margin-top--1"src="/Consumer-price-inflation.html" title="test" width="100%" height="600px"></iframe>
        <button type="submit" className="btn btn--primary margin-bottom--1 margin-left--1" >Save</button>
        <span className="margin-left--1"><a href="/Florence.html" id="submit-for-review" className="btn btn--positive">Save and submit for review</a></span>
        </form>
        );
    }
}

export default Preview;
