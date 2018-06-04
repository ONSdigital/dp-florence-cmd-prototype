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
import UpdateEditionList from './views/UpdateEditionList';
import DatasetMetadata from './views/DatasetMetadata';
import Collection from './views/Collection';
import VersionMetadata from './views/VersionMetadata';

ReactDOM.render((
    <div>
        <NavBar />
        <Router>
            <span>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Collection} />
                <Route exact path={`${process.env.PUBLIC_URL}/collections`} component={Collection} />
                <Route exact path={`${process.env.PUBLIC_URL}/datasets`} component={DatasetList} />
                <Route exact path={`${process.env.PUBLIC_URL}/dataset-options`} component={DatasetOptions} />
                <Route exact path={`${process.env.PUBLIC_URL}/publish-version`} component={NewEditionList} />
                <Route exact path={`${process.env.PUBLIC_URL}/update-version`} component={UpdateEditionList} />
                <Route exact path={`${process.env.PUBLIC_URL}/dataset-metadata`} component={DatasetMetadata} />
                <Route exact path={`${process.env.PUBLIC_URL}/new-version`} component={VersionMetadata} />
                <Route exact path={`${process.env.PUBLIC_URL}/preview`} component={Preview} />
            </span>
        </Router>
    </div>
    ), document.getElementById('root'))

registerServiceWorker();
