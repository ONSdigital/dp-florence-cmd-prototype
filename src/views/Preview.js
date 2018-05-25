import React, { Component } from 'react';
import '../scss/index.scss';

class Preview extends Component {
  render() {
    return (
        <form className="margin-left--3 margin-right--3">
        <h1 className="wrapper margin-top--6">Preview</h1>
         ◀ <a className="btn btn--link" href="http://google.com">Back</a>
        <iframe src="http://localhost:3000/Consumer-price-inflation.html" title="test" width="100%" height="500px"></iframe>
        <button type="submit" className="btn btn--primary margin-bottom--1 margin-left--2" >Save</button>
        <span className="margin-left--1"><a href="http://google.com" id="submit-for-review" className="btn btn--positive">Save and submit for review</a></span>
        </form>
        );
    }
}

export default Preview;
