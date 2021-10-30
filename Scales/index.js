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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.Products = [];
    }
    Scales.prototype.add = function (Product) {
        this.Products.push(Product);
    };
    Scales.prototype.getSumScale = function () {
        return this.Products.reduce(function (sum, current) {
            return sum + current.getSumScale();
        }, 0);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.Products.forEach(function (val) {
            nameList.push(val.getNameList());
        });
        return nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Product.prototype.getSumScale = function () {
        return this.weight;
    };
    Product.prototype.getNameList = function () {
        return this.name;
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    return Apple;
}(Product));
var tomato = new Tomato("tomato", 400);
var apple = new Apple("spple", 400);
var scales = new Scales;
scales.add(tomato);
console.log(scales.getSumScale());
console.log(scales.getNameList());
console.log("----------");
scales.add(apple);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=index.js.map