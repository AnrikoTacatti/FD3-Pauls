"use strict";
import React from 'react';
import TaskItem from '../components/TaskItem.js';



describe('TaskItem-test Snapshot', () => {
    let del = jest.fn();
    let openFormNewItemEdit = jest.fn();
    let setPin = jest.fn();
    let addDel = jest.fn();
    let deleteTaskItem = jest.fn();
    let getTime = jest.fn();
    let setColor = jest.fn();
    let props = {
        "data": {
            "name": "Мои заметки № 1",
            "text": "Мои заметки № 1",
            "time": 1636283818894,
            "key": "-Mnu6P7dMJTeVv8VESLh",
            "keychapter": "0"
        },
        "keychapter": "0",
        "keyitem": "-Mnu6P7dMJTeVv8VESLh",
        "index": 1,
        "attrdata": "all",
        "del": false,
    }
    const component = shallow(
        <TaskItem {...props} del={del} cbopenFormNewItemEdit={openFormNewItemEdit} cbsetPin={setPin}
            cbaddDel={addDel} cbdeleteTaskItem={deleteTaskItem} cbgetTime={getTime} cbsetColor={setColor} ></TaskItem>
    );
    test('TaskItem-test Snapshot', () => {
        expect(component).toMatchSnapshot();
    });
    test('TaskItem-test task-item__tools_Pin', () => {
        const btn = component.find(".task-item__tools_Pin");
        btn.simulate('click');
        expect(setPin).toHaveBeenCalled();
    });
    test('TaskItem-test task-item__tools_Edit', () => {
        const btn = component.find(".task-item__tools_Edit");
        btn.simulate('click');
        expect(openFormNewItemEdit).toHaveBeenCalled();
    });
    test('TaskItem-test task-item__tools_Trash', () => {
        const btn = component.find(".task-item__tools_Trash");
        btn.simulate('click');
        expect(addDel).toHaveBeenCalled();
    });
    test('TaskItem-test color', () => {
        const btn = component.find(".color").at(0);
        console.log(btn);
        btn.simulate('click');
        expect(setColor).toHaveBeenCalled();
    });

});





