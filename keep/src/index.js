
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize.css';
import './styles/style.css';

import TaskMain from './page/MainPage.js';
import combinedReducer from "./stores/stores.js";

const store = createStore(combinedReducer);

ReactDOM.render(<Provider store={store}><TaskMain /></Provider>, document.getElementById('root'));




