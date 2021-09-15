
import React from 'react';
import ProductRow from './ProductRow';


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





export default function ProductList(props) {
  const [stproduct, setProduct] = React.useState(props.product);
  const [selectid, setSelectid] = React.useState(null);
  const [editid, setEditid] = React.useState(null);
  const [newproduct, setNewproduct] = React.useState({});

  function Edit(index, e) {
    debugger;
    e.stopPropagation();
    console.log(e.target.value);
    setEditid(index);
  }


  function Censel() {
    setEditid(null);
  }

  function EditProduct(index, oldproduct, e) {
    debugger;
    e.stopPropagation();
    let product = { ...oldproduct, ...newproduct };
    console.log(stproduct);
    setProduct((prevState) => {
      debugger;
      let newprevState = [...prevState];
      newprevState[index] = product;
      return prevState = newprevState;
    });
  }


  function Editfield(field, e) {
    debugger;
    e.stopPropagation();
    setNewproduct((prevState) => {
      let newprevState = { ...prevState };
      newprevState[field] = e.target.value;
      return prevState = newprevState;

    });

  }


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

    <React.Fragment>

      <table border="1" width="100%" cellPadding="5">
        <caption>{props.name}</caption>
        <tbody>
          <tr>
            <th>{props.colname.name}</th>
            <th>{props.colname.price}</th>
            <th>{props.colname.src}</th>
            <th>{props.colname.quality}</th>
            <th>контроль</th>
            <th>{console.log(stproduct[0])}</th>
          </tr>

          {

            stproduct.map(function (el, index) {

              return <ProductRow name={el.name} price={el.price} src={el.src} quality={el.quality} select={el.id === selectid} id={el.id} key={el.id} fbSelected={Selected} fbEdit={Edit.bind(null, index)} fbDelete={Delete} stproduct={stproduct} />;
            })
          }
        </tbody>
      </table>{console.log("id---" + editid)}
      {

        editid !== null &&
        <div>
          <h1>Edit </h1>
          <div> name    <input type="text" defaultValue={stproduct[editid].name} onBlur={Editfield.bind(null, "name")} /></div>
          <div> price   <input type="text" defaultValue={stproduct[editid].price} onBlur={Editfield.bind(null, "price")} /></div>
          <div> src     <input type="text" defaultValue={stproduct[editid].src} onBlur={Editfield.bind(null, "src")} /></div>
          <div> quality <input type="text" defaultValue={stproduct[editid].quality} onBlur={Editfield.bind(null, "quality")} /></div>
          <div>
            <input type="button" value="Edit Product" onClick={EditProduct.bind(null, editid, stproduct[editid])} />
            <input type="button" value="Censel" onClick={Censel.bind(null, editid)} />
          </div>

        </div>

      }

    </React.Fragment  >
  );
};




/*Синтаксис модулей ES6*/



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



