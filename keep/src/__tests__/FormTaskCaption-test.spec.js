
"use strict";
import React from 'react';
import { FormTaskCaption } from '../components/FormTaskCaption.js';
jest.mock('../actions/FormTaskCaption.js');
import {
    actioncloseFormNewTaskCaption,
    actioncloseFormEditTaskCaption,
    actionsetNewTaskCaption,
    actioneditTaskCaption
} from '../actions/FormTaskCaption.js';


describe('FormTaskItem New', () => {
    let dispatch = jest.fn();
    actionsetNewTaskCaption.mockImplementation((dispatch, data) => { return data; });
    actioncloseFormNewTaskCaption.mockImplementation((dispatch, data) => { return data; });
    let UNSAFE_componentWillReceiveProps = jest.spyOn(FormTaskCaption.prototype, "UNSAFE_componentWillReceiveProps");

    const component = shallow(
        <FormTaskCaption dispatch={dispatch} />
    );
    component.setProps({
        openFormNewTaskCaption: true,
        openFormEditTaskCaption: false
    });

    test('ormTaskCaption New Snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('FormTaskCaption New UNSAFE_componentWillReceiveProps', () => {
        component.setProps({
            openFormNewTaskCaption: true,
            openFormEditTaskCaption: false
        });
        expect(UNSAFE_componentWillReceiveProps).toHaveBeenCalled();
    });

    test('FormTaskCaption New  form-title', () => {
        const title = component.find(".form-title").text();
        expect(title).toBe("Add task list");
    });

    test('FormTaskCaption New cancels', () => {
        const btn = component.find(".form-cancel");
        btn.simulate('click');
        expect(actioncloseFormNewTaskCaption).toHaveBeenCalledWith(false, dispatch);
    });

});


describe('FormTaskItem Edit', () => {

    let dispatch = jest.fn();
    actioneditTaskCaption.mockImplementation((dispatch, data) => { return data; });
    actioncloseFormEditTaskCaption.mockImplementation((dispatch, data) => { return data; });
    let UNSAFE_componentWillReceiveProps = jest.spyOn(FormTaskCaption.prototype, "UNSAFE_componentWillReceiveProps");

    const component = shallow(
        <FormTaskCaption dispatch={dispatch} />
    );
    component.setProps({
        openFormNewTaskCaption: false,
        openFormEditTaskCaption: { active: true, keychapter: "-MnosmgmdFWwUg_Qyj5o-test", name: "Заметки учеба" }
    });

    test('ormTaskCaption Edit Snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('FormTaskCaption Edit UNSAFE_componentWillReceiveProps', () => {
        component.setProps({
            openFormNewTaskCaption: false,
            openFormEditTaskCaption: { active: true, keychapter: "-MnosmgmdFWwUg_Qyj5o-test", name: "Заметки учеба" }
        });
        expect(UNSAFE_componentWillReceiveProps).toHaveBeenCalled();
    });

    test('FormTaskCaption Edit  form-title', () => {
        const title = component.find(".form-title").text();
        expect(title).toBe("Edit task list");
    });

    test('FormTaskCaption Edit cancels', () => {
        const btn = component.find(".form-cancel");
        btn.simulate('click');
        expect(actioncloseFormEditTaskCaption).toHaveBeenCalledWith({ active: false }, dispatch);
    });



});