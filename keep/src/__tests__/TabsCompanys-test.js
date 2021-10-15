"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import TabsCompanys from '../components/TabsCompanys';
import ClientsList from '../components/ClientsList';


describe('NEWProduct', () => {

  test('работа NEWProductBooton', () => {
    // создаём тестовую версию компонента
    const component = renderer.create(
      <TabsCompanys />
    );
    // найдём в вёрстке компонента саму кнопку
    const buttonNewProduct = component.root.find(el => {
      /*if (el.props.type == 'button' && el.props.value == "New Product") {
        console.log(el.props);
      }
      console.log("==============");*/
      return el.props.type == 'button' && el.props.value == "New Product"
    });
    // и "нажмём" на неё
    buttonNewProduct.props.onClick();
    /* const form = component.root.find(el => {
       /* if (el => el.props.className == "new-client") {
          console.log(el.children);
        }*/
    /*return el.props.className == "new-client"
  });*/
    /* console.log(component.root.find(el => el.props.className === "new-client"));*/
    expect(component.root.find(el => el.props.className === "new-client")).toBeTruthy();
  });

  test('работа NEWProductBooton input', () => {
    const component = renderer.create(
      <TabsCompanys />
    );
    const buttonNewProduct = component.root.find(el => {
      return el.props.type == 'button' && el.props.value == "New Product"
    });
    // и "нажмём" на неё
    buttonNewProduct.props.onClick();
    const form = component.root.find(el => {
      return el.props.className == "new-client"
    });

    expect(form.findAll(
      (el) => el.type == 'input'
        && el.props.type == 'text'
    ).length).toEqual(5);
  });




  test('работа NEWProduct', () => {

    const tableName = "Таблица ";
    const tableColName = {
      surname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      balans: "Баланс",
      status: "Статус"
    };
    const veclonClients = require('../data/velcom.json');

    const component2 = renderer.create(
      <ClientsList key="velcom" name={tableName} colname={tableColName} clients={veclonClients} />
    );

    component2.getInstance().setNewClients({
      "id": 5,
      "surname": "Иванов blocked velcom 5",
      "name": "Иван 5",
      "patronymic": "Иванович 5",
      "balans": 200,
      "status": "blocked"
    });

    expect(component2.getInstance().state.strclients.length).toEqual(5);


  });

});


describe('EditProduct', () => {

  test('работа EditProduct', () => {

    const tableName = "Таблица ";
    const tableColName = {
      surname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      balans: "Баланс",
      status: "Статус"
    };
    const veclonClients = require('../data/velcom.json');

    const component2 = renderer.create(
      <ClientsList key="velcom" name={tableName} colname={tableColName} clients={veclonClients} />
    );
    let client2 = {
      "id": 2,
      "surname": "Иванов blocked velcom 2 test",
      "name": "Иван 2 test",
    };
    component2.getInstance().setEditClients(client2, 2);

    expect(() => {
      let client = component2.getInstance().state.strclients.find(element => element.id == client2.id);
      return client.surname == client2.surname && client.name == client2.name
    }).toBeTruthy();
  });

});

describe('Delete Product', () => {

  test('работа DeleteProduct', () => {

    const tableName = "Таблица ";
    const tableColName = {
      surname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      balans: "Баланс",
      status: "Статус"
    };
    const veclonClients = require('../data/velcom.json');

    const component2 = renderer.create(
      <ClientsList key="velcom" name={tableName} colname={tableColName} clients={veclonClients} />
    );

    component2.getInstance().Delete(3);
    expect(() => {
      let client = component2.getInstance().state.strclients.find(element => element.id == 3);
      return client === undefined
    }).toBeTruthy();
  });

  test('работа DeleteProduct TR', () => {

    const tableName = "Таблица ";
    const tableColName = {
      surname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      balans: "Баланс",
      status: "Статус"
    };
    const veclonClients = require('../data/velcom.json');

    const component = renderer.create(
      <ClientsList key="velcom" name={tableName} colname={tableColName} clients={veclonClients} />
    );
    component.getInstance().Delete(3);
    let strclientsnaw = component.getInstance().state.strclients.length;
    const notdelete = component.root.findAll((el) => {
      return el.type === 'tr' && el.props.className === "ClientRow";
    });
    expect(notdelete.length).toEqual(strclientsnaw);
  });







});

describe('Filter Product Product', () => {

  const tableName = "Таблица ";
  const tableColName = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Отчество",
    balans: "Баланс",
    status: "Статус"
  };
  const veclonClients = require('../data/velcom.json');

  const component = renderer.create(
    <ClientsList key="velcom" name={tableName} colname={tableColName} clients={veclonClients} />
  );

  test('работа FilterProduct 	active', () => {
    let stateactive = component.getInstance().state.strclients.filter(element => element.status == "active").length;

    component.getInstance().clientsFilter("active");

    const active = component.root.findAll((el) => {
      return el.type === 'tr' && el.props.className === "ClientRow";
    });
    expect(active.length).toEqual(stateactive);
  });

  test('работа FilterProduct blocked', () => {
    let stateblocked = component.getInstance().state.strclients.filter(element => element.status == "blocked").length;
    component.getInstance().clientsFilter("blocked");
    const active = component.root.findAll((el) => {
      return el.type === 'tr' && el.props.className === "ClientRow";
    });
    expect(active.length).toEqual(stateblocked);
  });


  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

  test('работа FilterProduct 	active Snapshot', () => {
    const activebtn = component.root.find(el => {
      return el.props.type == 'button' && el.props.value == "Активные"
    })
    activebtn.props.onClick();
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

  });

  test('работа FilterProduct 	blocked  Snapshot', () => {
    const blockedbtn = component.root.find(el => {
      return el.props.type == 'button' && el.props.value == "Заблокированые"
    })
    blockedbtn.props.onClick();
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

  });

});




//группирует связанные по логике тесты в один блок
/*describe('my beverage', () => {
  // создаём тестовую версию компонента
  const component = ReactTestUtils.renderIntoDocument(
    <TabsCompanys />
  );



  test('form new', () => {
    component.findRenderedDOMComponentWithClass(component, "new-client");
  });

  test('form new input', () => {
    const form = component.findRenderedDOMComponentWithClass(component, "new-client");
    //выводит в консоль
    //console.log(form.childElementCount);
    // expect - утвеждение и его метод toBe
    expect(form.childElementCount).toBe(7);

  });
});*/

