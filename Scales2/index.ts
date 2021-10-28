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


interface IScalable {
    getSumScale(): number;
    getNameList(): string;
}


class Scales{
    Products:IScalable[]= [];

    add(Product:IScalable) {
       this.Products.push(Product);
    }

   getSumScale():number {
        return this.Products.reduce(function(sum:number, current:IScalable):number {
        return sum + current.getSumScale();
      }, 0);

    }
    getNameList():string[]{
        let nameList:string[] = [];
        this.Products.forEach(function(val:IScalable):void{
            nameList.push(val.getNameList());
          }, 0);
          return nameList;
    }
}




class Tomato  implements IScalable{
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
class Apple implements IScalable{
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


let tomato: IScalable = new Tomato ("tomato", 400);
let apple: IScalable = new Apple("apple", 500);

let scales = new Scales;
scales.add(tomato)
console.log(scales.getSumScale());
console.log(scales.getNameList());
console.log("----------");
scales.add(apple);
console.log(scales.getSumScale());
console.log(scales.getNameList());

