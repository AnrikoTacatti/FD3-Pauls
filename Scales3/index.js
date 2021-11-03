/*Создать проект Scales (весы).

Разработать класс Весы (Scales), имеющий:
массив добавленных на весы Продуктов (объектов класса Product);
метод add для добавления нового Продукта на весы;
метод getSumScale для получения суммарного веса добавленных Продуктов;
метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
Добавляемые методом add Продукты (объекты класса Product) должны иметь методы getScale и getName.
Разработать минимум два различных класса продуктов (например, Яблоко (Apple) и Помидор (Tomato)), наследующих от Product методы getScale и getName.

Создать объект класса Весы.
Создать несколько объектов классов Яблоко, Помидор и т.д. с различными именами и весами, добавить их на весы, выдать в консоль результат работы методов getSumScale и getNameList.

Прислать на проверку на адрес loktev.alex.74@gmail.com ссылку на git-репозиторий и имя папки с выполненным домашним заданием.
*/
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.Products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (product) {
        this.Products.push(product);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.Products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.Products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (product) {
        var Products = [];
        var storageProducts = localStorage.getItem('products');
        if (storageProducts !== null)
            Products = JSON.parse(storageProducts);
        Products.push(product);
        localStorage.setItem('products', JSON.stringify(Products));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var Products = [];
        var storageProducts = localStorage.getItem('products');
        if (storageProducts !== null)
            Products = JSON.parse(storageProducts);
        return new Product(Products[index].name, Products[index].weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var Products = [];
        var storageProducts;
        if ((storageProducts = localStorage.getItem('products')) !== null) {
            Products = JSON.parse(storageProducts);
        }
        return Products.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(stor) {
        this.stor = stor;
    }
    Scales.prototype.addItem = function (product) {
        this.stor.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.stor.getCount(); i++) {
            var item = this.stor.getItem(i);
            sum += item.getWeight();
        }
        console.log(sum);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.stor.getCount(); i++) {
            var item = this.stor.getItem(i);
            nameList.push(item.getName());
        }
        console.log(nameList);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    return Product;
}());
var tomato = new Product("tomato", 400);
var apple = new Product("apple", 400);
var scalesStorageEngineArray = new ScalesStorageEngineArray();
/*
scalesStorageEngineArray.addItem(tomato);
scalesStorageEngineArray.addItem(apple);
*/
var scales = new Scales(scalesStorageEngineArray);
scales.addItem(tomato);
scales.addItem(apple);
scales.getSumScale();
scales.getNameList();
var scalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();
/*scalesStorageEngineLocalStorage.addItem(tomato);
scalesStorageEngineLocalStorage.addItem(apple);*/
var scales2 = new Scales(scalesStorageEngineLocalStorage);
scales2.addItem(tomato);
scales2.addItem(apple);
scales2.getSumScale();
scales2.getNameList();
//# sourceMappingURL=index.js.map