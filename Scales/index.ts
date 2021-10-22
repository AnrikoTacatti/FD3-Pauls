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

class Scales {
    Products:Product[]= [];

    add(Product:Product) {
       this.Products.push(Product);
    }
   getSumScale():number {
    return this.Products.reduce(function(sum:number, current:Product):number {
        console.log(sum + current.getSumScale());
        return sum + current.getSumScale();
      }, 0);

    }
    getNameList(){
        this.Products.map(function(val:Product):string{
            console.log(val.getNameList());
            return val.getNameList();
          }, 0);
    }
}




class Product {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    getSumScale(): number {
        return this.weight;
    }
    getNameList(): string {
        return this.name;
    }

}
let tomato: Product = new Product("tomato", 400);
let apple: Product = new Product("spple", 400);

let scales = new Scales;
scales.add(tomato)
scales.getSumScale();
scales.getNameList();
console.log("----------");
scales.add(apple);
scales.getSumScale();
scales.getNameList();

