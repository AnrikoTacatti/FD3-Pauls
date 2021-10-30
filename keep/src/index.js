
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { db } from './api/api.js';
import 'normalize.css';
import './styles/style.css';
console.log(db);


import TaskMain from './page/MainPage.js';
import combinedReducer from "./stores/stores.js";


/*import { createBrowserHistory } from 'history'*/
/*import { routerMiddleware } from 'connected-react-router'*/
/*export const history = createBrowserHistory();*/

const store = createStore(combinedReducer);
/*
const store = createStore(
    combinedReducer(history), // root reducer with router state
    preloadedState,
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    )
);*/




/*let history = syncHistoryWithStore(createBrowserHistory(), store);*/

ReactDOM.render(<Provider store={store}><TaskMain /></Provider>, document.getElementById('root'));
