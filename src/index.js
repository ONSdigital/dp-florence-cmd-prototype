import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/index.scss';
import Preview from './views/Preview';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Preview />, document.getElementById('root'));
registerServiceWorker();
