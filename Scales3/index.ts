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


interface IStorageEngine{
    addItem(product:Product): void;
    getItem(index:number): Product;
    getCount(): number;
}



class ScalesStorageEngineArray implements IStorageEngine{
    Products:Product[]= [];

    addItem(product:Product):void {
       this.Products.push(product);
    }
    getItem(index:number):Product {
       return  this.Products[index];
    }
    getCount():number {
        return this.Products.length;
    }
}
class ScalesStorageEngineLocalStorage implements IStorageEngine{

    addItem(product:Product):void {
       let Products:any[] = [];
       let storageProducts:string = localStorage.getItem('products');
       if(storageProducts !== null) Products = JSON.parse(storageProducts);
    
       Products.push(product);
       localStorage.setItem('products', JSON.stringify(Products));

    }
    getItem(index:number):Product {
        let Products:any[] = [];
        let storageProducts:string = localStorage.getItem('products');
        if(storageProducts !== null) Products = JSON.parse(storageProducts);
       return  new Product(Products[index].name,Products[index].weight);
    }

    getCount():number {
        let Products:any[] = [];
        let storageProducts:string;
        if((storageProducts = localStorage.getItem('products')) !== null){
         Products = JSON.parse(storageProducts);
          }
        return Products.length;
    }
}
class Scales<StorageEngine extends IStorageEngine> {
    
    stor:IStorageEngine;
    constructor(stor:IStorageEngine) {
        this.stor = stor;
    }

    addItem(product:Product):void {
        this.stor.addItem(product);


    }
   getSumScale():void {
     
       let sum:number = 0;
        for(let i = 0; i < this.stor.getCount(); i++){
           let item = this.stor.getItem(i);
           sum += item.getWeight();
        }
        console.log(sum);
    }

    getNameList():void{
        let nameList:string[] = [];
        for(let i = 0; i < this.stor.getCount(); i++){
            let item = this.stor.getItem(i);
            nameList.push(item.getName());
         }
         console.log(nameList);
    }
}




class Product {
   private name: string;
   private weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

   public getName(): string {
        return this.name;
    }
    public getWeight(): number {
        return this.weight;
       
    }
}


let tomato: Product = new Product ("tomato", 400);
let apple: Product = new Product("apple", 400);

let scalesStorageEngineArray = new ScalesStorageEngineArray();
/*
scalesStorageEngineArray.addItem(tomato);
scalesStorageEngineArray.addItem(apple);
*/
let scales = new Scales<ScalesStorageEngineArray>(scalesStorageEngineArray);
scales.addItem(tomato)
scales.addItem(apple);
scales.getSumScale();
scales.getNameList();



let scalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();
/*scalesStorageEngineLocalStorage.addItem(tomato);
scalesStorageEngineLocalStorage.addItem(apple);*/


let scales2 = new Scales<ScalesStorageEngineArray>(scalesStorageEngineLocalStorage);
scales2.addItem(tomato)
scales2.addItem(apple);
scales2.getSumScale();
scales2.getNameList();



