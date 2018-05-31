import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import './scss/index.scss';
import Preview from './views/Preview';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './global/Navbar';
import DatasetList from './views/DatasetList';
import DatasetOptions from './views/DatasetOptions';
import NewEditionList from './views/NewEditionList';
import DatasetMetadata from './views/DatasetMetadata';
import Collection from './views/Collection';

//ReactDOM.render(<Preview />, document.getElementById('root'));

ReactDOM.render((
    <div>
        <NavBar />
        <Router>
            <span>
                <Route exact path={`/`} component={Collection} />
                <Route exact path={`/collections`} component={Collection} />
                <Route exact path={`/datasets`} component={DatasetList} />
                <Route exact path={`/dataset-options`} component={DatasetOptions} />
                <Route exact path={`/publish-version`} component={NewEditionList} />
                <Route exact path={`/dataset-metadata`} component={DatasetMetadata} />
                <Route exact path={`/preview`} component={Preview} />
            </span>
        </Router>
    </div>
    ), document.getElementById('root'))

registerServiceWorker();
