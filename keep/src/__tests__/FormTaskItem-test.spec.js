
"use strict";
import React from 'react';
import { FormTaskItem } from '../components/FormTaskItem.js';
jest.mock('../actions/FormTaskItem.js');
import {
    actioncloseFormNew,
    actioncloseFormEdit,
    actionsetNewTaskItem,
    setTaskItem
} from '../actions/FormTaskItem.js';


describe('FormTaskItem New', () => {
    let state = {
        openFormTaskItemNew: { "activ": true, "keychapter": "-Mnu71_BYp_test" },
        openFormTaskItemEdit: false,
    }

    let dispatch = jest.fn();
    actionsetNewTaskItem.mockImplementation((dispatch, data) => { return data; });
    actioncloseFormNew.mockImplementation((dispatch, data) => { return data; });
    let UNSAFE_componentWillReceiveProps = jest.spyOn(FormTaskItem.prototype, "UNSAFE_componentWillReceiveProps");

    const component = shallow(
        <FormTaskItem {...state} dispatch={dispatch} />
    );
    component.setProps({
        openFormTaskItemNew: { "activ": true, "keychapter": "-Mnu71_BYp_test" }
    });
    test('FormTaskItem New Snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('FormTaskItem New UNSAFE_componentWillReceiveProps', () => {
        component.setProps({
            "openFormTaskItemNew": { "activ": true, "keychapter": "-Mnu71_BYp_test" }
        });
        expect(UNSAFE_componentWillReceiveProps).toHaveBeenCalled();
    });

    test('FormTaskItem New  form-title', () => {
        const title = component.find(".form-title").text();
        expect(title).toBe("Add task item");
    });
    it('ref inputTaskItemName', () => {
        expect(component.find(".task-item-name").at(0)).toHaveLength(1);
        expect(component.instance().inputTaskItemName).toBeTruthy();
    });
    it('ref inputTaskItemName', () => {
        expect(component.find(".task-item-name").at(0)).toHaveLength(1);
        expect(component.instance().inputTaskItemText).toBeTruthy();
    });


    test('FormTaskItem New cancels', () => {
        const btn = component.find(".form-cancel");
        btn.simulate('click');
        expect(actioncloseFormNew).toHaveBeenCalledWith({ active: false }, dispatch);
    });



    /*   test('FormTaskItem New filds', () => {
           component.find(".task-item-name").at(0).simulate('change', { target: { value: 'test@example.com'} });
           component.find(".task-item-text").at(0).simulate('change', 'test name');
           console.log("ref", component.instance().inputTaskItemName);
           console.log(component.find(".task-item-name").get(0));
           const btn = component.find(".form-submit");
           btn.simulate('click');
           expect(actionsetNewTaskItem).toHaveBeenCalledWith({
               keychapter: "-Mnu71_BYp_test",
               title: 'test name',
               text: 'test text'
           }, dispatch);
       });*/
    /*
        test('FormTaskItem New filds', () => {
            console.log("tect", component.instance().inputTaskItemName);
            component.instance().inputTaskItemName.current.value = 'test name';
            component.instance().inputTaskItemText.current.value = 'test name';
            console.log("tect", component.instance().inputTaskItemName);
            component.instance().addNewTaskItem();
            expect(actionsetNewTaskItem).toHaveBeenCalledWith({
                keychapter: "-Mnu71_BYp_test",
                title: 'test name',
                text: 'test text'
            }, dispatch);
        });*/

});


describe('FormTaskItem Edit', () => {
    let state = {
        openFormTaskItemNew: false,
        openFormTaskItemEdit: {
            name: 'Мои заметки № 1',
            text: 'Мои заметки № 1',
            activ: true,
            keychapter: '0',
            keyitem: '-Mnu6P7dMJTeVv8VESLh3'
        },
    }

    let dispatch = jest.fn();
    setTaskItem((dispatch, data) => { return data; });
    actioncloseFormNew.mockImplementation((dispatch, data) => { return data; });
    let UNSAFE_componentWillReceiveProps = jest.spyOn(FormTaskItem.prototype, "UNSAFE_componentWillReceiveProps");
    const component = shallow(
        <FormTaskItem {...state} dispatch={dispatch} />
    );

    component.setProps({
        openFormTaskItemNew: false,
        openFormTaskItemEdit: {
            name: 'Мои заметки № 1',
            text: 'Мои заметки № 1',
            activ: true,
            keychapter: '0',
            keyitem: '-Mnu6P7dMJTeVv8VESLh3'
        }
    });

    test('FormTaskItem Edit Snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('FormTaskItem Edit UNSAFE_componentWillReceiveProps', () => {
        component.setProps({
            openFormTaskItemNew: false,
            openFormTaskItemEdit: {
                name: 'Мои заметки № 1',
                text: 'Мои заметки № 1',
                activ: true,
                keychapter: '0',
                keyitem: '-Mnu6P7dMJTeVv8VESLh3'
            }
        });
        expect(UNSAFE_componentWillReceiveProps).toHaveBeenCalled();
    });

    test('FormTaskItem Edit  form-title', () => {
        const title = component.find(".form-title").text();
        expect(title).toBe("Edit task item");
    });
    test('FormTaskItem Edit cancels', () => {
        const btn = component.find(".form-cancel");
        btn.simulate('click');
        expect(actioncloseFormEdit).toHaveBeenCalledWith({ active: false }, dispatch);
    });

});