
import React from 'react';
import ReactDOM from 'react-dom';
import ProductRow from './ProductRow.js';


/*

/*
class ИмяКомпонента extends React.Component {

static propTypes = {
  ... // типы props
};

static defaultProps = {
  ... // начальное значение props
};

constructor(props) {
  super(props);
  ...

  this.state = {
    ... // начальное значение state может быть указано здесь, оно может зависеть от props
  };

}

state = {
  ... // начальное значение state может быть указано здесь, оно может зависеть от this.props
};

render() {
  ...
}

}*/





function ProductList(props) {
  const [stproduct, setProduct] = React.useState(props.product);
  const [selectid, setSelectid] = React.useState(null);

  function Delete(productid, e) {
    e.stopPropagation();
    let isDelete = window.confirm("Вы действительно хотите удалить?");
    if (isDelete) {
      let prod = stproduct.filter((val) => {

        return val.id != productid
      });

      setProduct(prod);
    }
  }
  function Selected(productid, e) {
    debugger;
    if (selectid === productid) {
      setSelectid(null);
    }
    else {
      setSelectid(productid);
    }

  }
  return (
    <table border="1" width="100%" cellpadding="5">
      <caption>{props.name}</caption>
      <tr>
        <th>{props.colname.name}</th>
        <th>{props.colname.price}</th>
        <th>{props.colname.src}</th>
        <th>{props.colname.quality}</th>
        <th>контроль</th>
      </tr>
      {
        stproduct.map(function (el) {

          return <ProductRow name={el.name} price={el.price} src={el.src} quality={el.quality} select={el.id === selectid} id={el.id} key={el.id} fbSelected={Selected} fbDelete={Delete} stproduct={stproduct} />;
        })
      }
    </table>
  );
};

/*Синтаксис модулей ES6*/

export default ProductLis;

/*
Синтаксис модулей ES6

export { имя1, имя2, ... };

Экспортировать из данного модуля указанные сущности (классы, переменные, функции...).


export default имя;

Экспортировать «по умолчанию» из данного модуля указанную сущность.


export let имя=значение;
export function имя(аргументы) { тело }
export class имя { описание }

Описать и экспортировать из данного модуля переменную, функцию, класс соответственно.


import { имя1, имя2, ... } from "путь/имямодуля";
import { имя1, имя2, ... } from "./имямодуля";
import { имя1, имя2, ... } from "имямодуля";

Получить экспортированные другим модулем сущности.
Во втором варианте — модуль находится в этой же папке.
В третьем варианте — модуль встроенный.


import { имя as новоеимя } from "путь/имямодуля";

Получить экспортированную другим модулем сущность под другим именем.


import имя from "путь/имямодуля";

Получить сущность, экспортированную «по умолчанию» другим модулем.

*/



