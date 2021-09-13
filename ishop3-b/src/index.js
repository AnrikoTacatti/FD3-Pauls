
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами 
import ProductList from './js/Components/ProductList.js';

const tableName = "Таблица продуктов";

const tableColName = {
    name: "название",
    price: "цена",
    src: "фотография",
    quality: "кол-во ед"
};

const product = require('./js/data/products.json');


ReactDOM.render(<ProductList name={tableName} colname={tableColName} product={product} />, document.getElementById('root'));
