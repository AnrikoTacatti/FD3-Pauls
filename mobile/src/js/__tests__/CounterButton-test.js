"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import TabsCompanys from '../components/TabsCompanys';

test('работа CounterButton', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <TabsCompanys />
  );
  // найдём в вёрстке компонента саму кнопку
  const buttonNewProduct = component.root.find(el => el.type == 'button' && el.value == "New Product");
  // и "нажмём" на неё
  buttonNewProduct.props.onClick();
  component.root.find(el => el.сlass = "new-client").toBe(true);


});

//группирует связанные по логике тесты в один блок
describe('my beverage', () => {
  // создаём тестовую версию компонента
  const component = renderer.create(
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
});