"use strict";
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuTask } from '../components/MenuTask';
jest.mock('../actions/MenuTask.js');
import {
    actionopenFormNewTaskCaption,
    actionopenFormEditTaskCaption,
    actiondeleteChapter

} from '../actions/MenuTask.js';

let taskLists = {
    "0-test": {
        "itemlist": {
            "-Mnu6P7dMJTeVv8VESLh": {
                "name": "Мои заметки № 1",
                "text": "Мои заметки № 1",
                "time": 1636283818894,
                "key": "-Mnu6P7dMJTeVv8VESLh"
            },
            "-Mnu6RA2cuqhZiUml2eL": {
                "name": "Мои заметки № 2",
                "pin": true,
                "text": "Мои заметки № 2",
                "time": 1636283827275,
                "key": "-Mnu6RA2cuqhZiUml2eL"
            }
        },
        "name": "Мои заметки",
        "url": "moi-zametki",
        "key": "0-test"
    },
    "1-test": {
        "itemlist": {
            "-Mnu6lwJvGFmsBIjhPBh": {
                "name": "Заметки работа №1",
                "text": "Заметки работа №1",
                "time": 1636283916422,
                "key": "-Mnu6lwJvGFmsBIjhPBh"
            },
            "-Mnu6n_j_6Szfb5fRtuR": {
                "name": "Заметки работа №2",
                "text": "Заметки работа №2",
                "time": 1636283923175,
                "key": "-Mnu6n_j_6Szfb5fRtuR"
            }
        },
        "name": "Заметки работа",
        "url": "zametki-rabota",
        "key": "1-test"
    },
    "-MnosmgmdFWwUg_Qyj5o": {
        "itemlist": {
            "-Mnu71_BYp5YokQlvrg4": {
                "name": "Заметки учеба №111",
                "pin": true,
                "style": {
                    "backgroundColor": "#ffecf1",
                    "border": "1px solid #f9c8ca"
                },
                "text": "Заметки учеба №1",
                "time": 1636466420836,
                "key": "-Mnu71_BYp5YokQlvrg4"
            },
            "-Mnu736Ol-_bA2P_gxQg": {
                "name": "Заметки учеба №2",
                "text": "Заметки учеба №2",
                "time": 1636283990848,
                "key": "-Mnu736Ol-_bA2P_gxQg"
            },
            "-Mnu74Jhfq6DAtIDT796": {
                "name": "Заметки учеба №3",
                "text": "",
                "time": 1636465260116,
                "key": "-Mnu74Jhfq6DAtIDT796-test"
            }
        },
        "name": "Заметки учеба",
        "time": 1636196167296,
        "url": "zametki-ucheba",
        "key": "-MnosmgmdFWwUg_Qyj5o"
    },
    "-Mnot8F4fnIev0gGlnxg": {
        "itemlist": {
            "-Mnu7QdYFIdU_yM1_eCE": {
                "name": "Заметки хобби № 1",
                "text": "Заметки хобби № 1",
                "time": 1636284087310,
                "key": "-Mnu7QdYFIdU_yM1_eCE"
            },
            "-Mnu7SIorvdewdoTTefa": {
                "name": "Заметки хобби № 2",
                "text": "Заметки хобби № 2",
                "time": 1636284094021,
                "key": "-Mnu7SIorvdewdoTTefa"
            }
        },
        "name": "Заметки хобби",
        "time": 1636196193514,
        "url": "zametki-hobbi",
        "key": "-Mnot8F4fnIev0gGlnxg-test"
    }
};



describe('TaskChapter-test', () => {
    let state = {
        TaskLists: taskLists,
    }
    let dispatch = jest.fn();
    actionopenFormNewTaskCaption.mockImplementation((dispatch, data) => { return data; });
    actionopenFormEditTaskCaption.mockImplementation((dispatch, data) => { return data; });
    actiondeleteChapter.mockImplementation((dispatch, data) => { return data; });
    let UNSAFE_componentWillReceiveProps = jest.spyOn(MenuTask.prototype, "UNSAFE_componentWillReceiveProps");

    const component = shallow(
        <MenuTask  {...state} dispatch={dispatch} />
    );

    test('MenuTask Snapshot zametki-ucheba', () => {
        expect(component).toMatchSnapshot();
    });
    test('MenuTask  New UNSAFE_componentWillReceiveProps', () => {
        component.setProps({
            TaskLists: taskLists,
        });
        expect(UNSAFE_componentWillReceiveProps).toHaveBeenCalled();
    });

    test('MenuTask  TaskItemContainer length', () => {
        const TaskItemContainerobj = component.find(NavLink);
        expect(TaskItemContainerobj).toHaveLength(6);
    });
    test('MenuTask openFormEditTaskCaption', () => {
        const btn = component.find("li").at(2).find(".openFormEditTaskCaption");
        btn.simulate('click');
        expect(actionopenFormEditTaskCaption).toHaveBeenCalledWith({ active: true, keychapter: "0-test", name: "Мои заметки" }, dispatch);
    });
    test('MenuTask actiondeleteChapter', () => {
        let confirm = jest.spyOn(window, 'confirm');
        confirm.mockImplementation(jest.fn(() => true));
        const btn = component.find("li").at(2).find(".deleteChapter");
        btn.simulate('click');
        expect(actiondeleteChapter).toHaveBeenCalledWith({ keychapter: "0-test" }, dispatch);
    });

    test('MenuTask openFormNewTaskCaption', () => {
        const btn = component.find(".openFormNewTaskCaption");
        btn.simulate('click');
        expect(actionopenFormNewTaskCaption).toHaveBeenCalledWith(true, dispatch);
    });
});








