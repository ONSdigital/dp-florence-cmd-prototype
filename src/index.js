import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import './scss/index.scss';
import Preview from './views/Preview';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './global/Navbar';
import DatasetList from './views/DatasetList';

//ReactDOM.render(<Preview />, document.getElementById('root'));

ReactDOM.render((
    <div>
        <NavBar />
        <Router>
            <span>
                <Route exact path="/" component={DatasetList} />
                <Route exact path="/preview" component={Preview} />
            </span>
        </Router>
    </div>
    ), document.getElementById('root'))

registerServiceWorker();
