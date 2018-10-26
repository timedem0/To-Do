import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from "jquery";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.$ = window.jQuery = jQuery;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
