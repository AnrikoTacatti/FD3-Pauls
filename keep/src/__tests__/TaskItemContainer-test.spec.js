"use strict";
import React from 'react';
import { TaskItemContainer } from '../components/TaskItemContainer.js';
jest.mock('../actions/TaskItem.js');
import {
    actionopenFormNewItemEdit,
    actionremoveTaskItem,
    actionsetTaskItemStyle,
    actionsetTaskItemPin
} from '../actions/TaskItem.js';

describe('TaskItemContainer', () => {
    let props = {
        data: {
            name: "Мои заметки № 1",
            text: "Мои заметки № 1",
            time: 1636283818894,
            key: "-Mnu6P7dMJTeVv8VESLh3",
            keychapter: "0"
        },
        keychapter: "0",
        keyitem: "-Mnu6P7dMJTeVv8VESLh3",
        index: 1,
        attrdata: "all",
        del: false,
    }

    let dispatch = jest.fn();

    // actionopenFormNewItemEdit.mockReturnValue(data);
    actionopenFormNewItemEdit.mockImplementation((data, dispatch) => { return data; });
    actionsetTaskItemStyle.mockImplementation((data, dispatch) => { return data; });

    const component = shallow(
        <TaskItemContainer dispatch={dispatch} data={props.data} keychapter="0" keyitem="-Mnu6P7dMJTeVv8VESLh3" key="-Mnu6P7dMJTeVv8VESLh3" index={1}
            attrdata={"all"}
        />
    );
    const instance = component.instance();

    test('TaskItemContainer openFormNewItemEdit', () => {
        instance.openFormNewItemEdit();
        expect(actionopenFormNewItemEdit).toHaveBeenCalledWith({
            name: 'Мои заметки № 1',
            text: 'Мои заметки № 1',
            activ: true,
            keychapter: '0',
            keyitem: '-Mnu6P7dMJTeVv8VESLh3'
        }, dispatch
        );
    });

    test('TaskItemContainer addDel', () => {
        instance.addDel();
        expect(component.state().del).toBeTruthy();
    });

    test('TaskItemContainer deleteTaskItem', () => {
        component.setProps({
            del: true,
        });
        let confirm = jest.spyOn(window, 'confirm');
        confirm.mockImplementation(jest.fn(() => false));
        instance.deleteTaskItem();
        expect(component.state('del')).toBe(false);
    });


    test('TaskItemContainer  setColor', () => {
        instance.setColor({ "backgroundColor": "#fff4ba", "border": "1px solid #fbe67b" });
        expect(actionsetTaskItemStyle).toHaveBeenCalledWith({
            style: { "backgroundColor": "#fff4ba", "border": "1px solid #fbe67b" },
            keychapter: '0',
            keyitem: '-Mnu6P7dMJTeVv8VESLh3'
        }, dispatch
        );
    });

    test('TaskItemContainer  setPin', () => {
        instance.setPin(true);
        expect(actionsetTaskItemPin).toHaveBeenCalledWith({
            pin: false,
            keychapter: '0',
            keyitem: '-Mnu6P7dMJTeVv8VESLh3'
        }, dispatch
        );
    });

    test('TaskItemContainer getTime', () => {
        instance.getTime(1636283818894);
        expect(instance.getTime(1636283818894)).toBe('7/10/2021 14:16');
    });


});
