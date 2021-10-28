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
var Scales = /** @class */ (function () {
    function Scales(stor) {
        this.stor = stor;
        this.length = this.stor.getCount();
    }
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.length; i++) {
            var item = this.stor.getItem(i);
            sum += item.getWeight();
        }
        console.log(sum);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.length; i++) {
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
scalesStorageEngineArray.addItem(tomato);
scalesStorageEngineArray.addItem(apple);
var scales = new Scales(scalesStorageEngineArray);
scales.getSumScale();
scales.getNameList();
//# sourceMappingURL=index.js.map