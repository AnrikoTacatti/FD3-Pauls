import React from 'react';
import ClientRow from './ClientRow';
import EditProductEl from './EditClient';
import NewProductEl from './NewClient';
import InfoProductEl from './InfoClient';
import { voteEvents } from '../events';
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


export default class ProductList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      strclients: props.clients,
      selectid: null,
      editid: null,
      newproduct: {},
      filderror: { name: null, balans: null },
      newForm: null,
      clientsfilter: true
    }

    this.New = this.New.bind(this);
    this.Censel = this.Censel.bind(this);
    this.Delete = this.Delete.bind(this);
    this.abSort = this.Delete.bind(this);
    this.setNewClients = this.setNewClients.bind(this);
    this.setEditClients = this.setEditClients.bind(this);
    this.setEditid = this.setEditid.bind(this);
    this.setSelectid = this.setSelectid.bind(this);
    this.setfildError = this.setfildError.bind(this);
    this.setNew = this.setNew.bind(this);
    this.clientsFilter = this.clientsFilter.bind(this);
  }

  setEditClients(data, index) {
    this.setState((prevState) => {
      debugger;
      let newprevState = [...prevState.strclients];
      let i = newprevState.findIndex(element => element.id === index);
      newprevState[i] = data;
      return { strclients: newprevState }
    });
    this.setState({ selectid: data.id });
    this.setState({ editid: null });
  }

  setEditid(data) {
    this.setState({ editid: data });
    this.setState({ selectid: null });
    this.setState({ newForm: null });
  }

  setSelectid(data) {
    this.setState({ selectid: data });
    this.setState({ editid: null });
    this.setState({ newForm: false });
  }

  setfildError(data) {
    this.setState({ filderror: data });
  }

  setNewproduct(data) {
    this.setState({ newproduct: data });
  }

  setNew(data) {
    this.setState({ newForm: data });
  }

  clientsFilter(data) {
    this.setState({ clientsfilter: data });
  }



  New(e) {
    if (e !== undefined) e.stopPropagation();

    this.setState({ newForm: true });
    this.setState({ selectid: null });
    this.setState({ editid: null });
    this.setState({ filderror: { name: null, balans: null } });
  }

  Censel() {
    this.setState({ editid: null });
    this.setState({ newForm: null });
    this.setState({ newproduct: {} });
  }

  Delete(productid) {
    let prod = this.state.strclients.filter((val) => {
      return val.id != productid
    });
    this.setState({ strclients: prod });
    this.setState({ editid: null });
  }

  setNewClients(newproduct) {
    this.setState((prevState) => {
      let newprevState = [...prevState.strclients];
      newprevState[newprevState.length] = newproduct;
      return { strclients: newprevState }
    });
    this.setState({ newForm: null });
    this.setState({ selectid: newproduct.id });
  }


  componentDidMount = () => {
    voteEvents.addListener('EsetNewProduct', this.setNewClients);
    voteEvents.addListener('EsetEditProduct', this.setEditClients);
    voteEvents.addListener('EsetEditid', this.setEditid);
    voteEvents.addListener('EDelete', this.Delete);
    voteEvents.addListener('ECensel', this.Censel);
    voteEvents.addListener('EsetSelectid', this.setSelectid);

  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EsetNewProduct', this.setNewClients);
    voteEvents.removeListener('EsetEditProduct', this.setEditClients);
    voteEvents.removeListener('EsetEditid', this.setEditid);
    voteEvents.removeListener('EDelete', this.Delete);
    voteEvents.removeListener('ECensel', this.Censel);
    voteEvents.removeListener('EsetSelectid', this.setSelectid);
  };



  render() {
    console.log("render ProductList");
    return (
      <React.Fragment>
        <table border="0" width="100%" cellPadding="5">
          <caption>{this.props.name}</caption>
          <tbody>
            <tr>
              <th><input type="button" value="Все" onClick={this.clientsFilter.bind(null, true)} />
                <input type="button" value="Активные" onClick={this.clientsFilter.bind(null, "active")} />
                <input type="button" value="Заблокированые" onClick={this.clientsFilter.bind(null, "blocked")} />
              </th>
            </tr>
            <tr>
              <th>{this.props.colname.surname}</th>
              <th>{this.props.colname.name}</th>
              <th>{this.props.colname.patronymic}</th>
              <th>{this.props.colname.balans}</th>
              <th>{this.props.colname.status}</th>
              <th>редактировать</th>
              <th>удалить</th>
            </tr>
            {


              this.state.strclients.map((el, index) => {
                if (el.status === this.state.clientsfilter || this.state.clientsfilter === true) {
                  return <ClientRow el={el} key={el.id} selectid={el.id === this.state.selectid && this.state.selectid}
                  />;
                }
              })
            }
          </tbody>
        </table>
        <br />
        <input type="button" value="New Product" onClick={this.New} disabled={Object.keys(this.state.newproduct).length > 0} />

        {console.log("id---" + this.state.editid)}
        {

          this.state.editid !== null && this.state.selectid === null &&
          <EditProductEl key={this.state.editid} editid={this.state.editid} strclientsedit={this.state.strclients.find(element => element.id === this.state.editid)} filderror={this.state.filderror} newproduct={this.state.newproduct}
          />
        }
        {
          this.state.newForm === true && this.state.selectid === null &&
          <NewProductEl key={this.state.editid} filderror={this.state.filderror} newproduct={this.state.newproduct}
            newproductid={this.state.strclients.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1} newproductnumber={this.state.strclients.length}
          />
        }
        {
          this.state.selectid !== null &&
          <InfoProductEl key={this.state.editid} product={this.state.strclients.find(element => element.id === this.state.selectid)} selectid={this.state.selectid} />
        }
      </React.Fragment >
    );
  }
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



