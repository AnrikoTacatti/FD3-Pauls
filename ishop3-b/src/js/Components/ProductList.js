
import React from 'react';
import ProductRow from './ProductRow';
import EditProductEl from './EditProduct';
import NewProductEl from './NewProduct';
import InfoProductEl from './InfoProduct';

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
  const [filderror, setfildError] = React.useState({ name: null, price: null, src: null, quality: null });
  const [newb, setNew] = React.useState(null);

  function New(e) {
    debugger;
    e.stopPropagation();
    setSelectid(null);
    setEditid(null);
    setNew(true);
    setfildError({ name: null, price: null, src: null, quality: null });
  }

  function Censel() {
    setEditid(null);
    setNew(null);
    setNewproduct({});
  }

  function Delete(productid) {
    let prod = props.stproduct.filter((val) => {
      return val.id != productid
    });
    props.setProduct(prod);
  }

  function Editfield(field, e) {
    debugger;
    e.stopPropagation();
    if (e.target.value) {

      switch (field) {
        case "name":
          var str = e.target.value;
          var patt = new RegExp(/^\D+$/);
          var res = patt.test(str);
          break;
        case "price":
          var str = e.target.value;
          var patt = new RegExp(/^[0-9]+$/);
          var res = patt.test(str);
          break;

        case "src":
          var str = e.target.value;
          var patt = new RegExp("^(https?)://", "i");
          var res = patt.test(str);
          break;
        case "quality":
          var str = e.target.value;
          var patt = new RegExp(/^[0-9]+$/);
          var res = patt.test(str);
          break;
      }
      if (res) {
        setNewproduct((prevState) => {
          let newprevState = { ...prevState };
          newprevState[field] = e.target.value;
          return prevState = newprevState;
        });
        setfildError((prevState) => {
          debugger;
          let newprevState = { ...filderror };
          newprevState[field] = false;
          return prevState = newprevState;
        });
      }
      else {
        setfildError((prevState) => {
          debugger;
          let newprevState = { ...filderror };
          newprevState[field] = true;
          return prevState = newprevState;
        });
      }
    }
    else {
      setfildError((prevState) => {
        debugger;
        let newprevState = { ...filderror };
        newprevState[field] = true;
        return prevState = newprevState;
      });
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

          </tr>
          {


            stproduct.map(function (el, index) {
              return <ProductRow {...el} key={el.id} select={index === selectid} id={el.id} editid={editid} newproduct={newproduct} selectid={selectid} index={index}
                setProduct={setProduct} setEditid={setEditid} setSelectid={setSelectid} setfildError={setfildError} setNew={setNew} fbDelete={Delete} />;
            })
          }
        </tbody>
      </table>
      <br />
      <input type="button" value="New Product" onClick={New} disabled={Object.keys(newproduct).length > 0} />

      {console.log("id---" + editid)}
      {

        editid !== null && selectid === null &&
        <EditProductEl key={editid} editid={editid} stproductedit={stproduct[editid]} filderror={filderror} newproduct={newproduct}

          setProduct={setProduct} setEditid={setEditid} setfildError={setfildError} setNewproduct={setNewproduct} fbCensel={Censel} fbEditfield={Editfield} />
      }
      {
        newb === true && selectid === null &&
        <NewProductEl key={editid} editid={editid} filderror={filderror} newproduct={newproduct}
          newproductid={stproduct.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1} newproductnumber={stproduct.length}
          setProduct={setProduct} setEditid={setEditid} setSelectid={setSelectid} setfildError={setfildError} setNewproduct={setNewproduct} fbCensel={Censel} fbEditfield={Editfield} />
      }
      {
        selectid !== null &&
        <InfoProductEl key={editid} editid={editid} product={stproduct[selectid]} selectid={selectid} />
      }
    </React.Fragment >
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



