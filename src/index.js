import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

//import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
	<Routes />, document.getElementById('root'));
registerServiceWorker();
