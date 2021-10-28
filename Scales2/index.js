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
            return sum + current.getSumScale();
        }, 0);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.Products.forEach(function (val) {
            nameList.push(val.getNameList());
        }, 0);
        return nameList;
    };
    return Scales;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Tomato.prototype.getSumScale = function () {
        return this.weight;
    };
    Tomato.prototype.getNameList = function () {
        return this.name;
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Apple.prototype.getSumScale = function () {
        return this.weight;
    };
    Apple.prototype.getNameList = function () {
        return this.name;
    };
    return Apple;
}());
var tomato = new Tomato("tomato", 400);
var apple = new Apple("apple", 500);
var scales = new Scales;
scales.add(tomato);
console.log(scales.getSumScale());
console.log(scales.getNameList());
console.log("----------");
scales.add(apple);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=index.js.map