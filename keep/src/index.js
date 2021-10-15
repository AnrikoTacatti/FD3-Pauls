
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';

import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';



window.handleGoogleApiLoaded = () => {
    SessionActions.authorize(true, renderApp);
};
ReactDOM.render(<TabsCompanys />, document.getElementById('root'));
