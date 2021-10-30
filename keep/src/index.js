
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { db } from './api/api.js';
import 'normalize.css';
import './styles/style.css';
console.log(db);



/*import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';*/

import TaskMain from './page/MainPage.js';
import combinedReducer from "./stores/stores.js";
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const store = createStore(combinedReducer);
let history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(<Provider store={store}><TaskMain history={history} /></Provider>, document.getElementById('root'));
