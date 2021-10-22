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
var Scales = /** @class */ (function () {
    function Scales() {
        this.Products = [];
    }
    Scales.prototype.add = function (Product) {
        this.Products.push(Product);
    };
    Scales.prototype.getSumScale = function () {
        return this.Products.reduce(function (sum, current) {
            console.log(sum + current.getSumScale());
            return sum + current.getSumScale();
        }, 0);
    };
    Scales.prototype.getNameList = function () {
        this.Products.map(function (val) {
            console.log(val.getNameList());
            return val.getNameList();
        }, 0);
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
var tomato = new Product("tomato", 400);
var apple = new Product("spple", 400);
var scales = new Scales;
scales.add(tomato);
scales.getSumScale();
scales.getNameList();
console.log("----------");
scales.add(apple);
scales.getSumScale();
scales.getNameList();
//# sourceMappingURL=index.js.map