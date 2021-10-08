
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';
import ProductList from './js/Components/ProductList.js';

const tableName = "Таблица ";

const tableColName = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Отчество",
    balans: "Баланс",
    status: "Статус"
};


const product = require('./js/data/products.json');


ReactDOM.render(<ProductList name={tableName} colname={tableColName} product={product} />, document.getElementById('root'));
