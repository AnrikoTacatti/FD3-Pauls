"use strict";
import React from 'react';
import TaskChapter from '../components/TaskChapter';
import TaskItemContainer from '../components/TaskItemContainer.js';

let taskLists = {
    "0": {
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
        "key": "0"
    },
    "1": {
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
        "key": "1"
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
                "key": "-Mnu74Jhfq6DAtIDT796"
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
        "key": "-Mnot8F4fnIev0gGlnxg"
    }
};



let taskListsItemsSort = [
    {
        "name": "Заметки учеба №111",
        "pin": true,
        "style": {
            "backgroundColor": "#ffecf1",
            "border": "1px solid #f9c8ca"
        },
        "text": "Заметки учеба №1",
        "time": 1636466420836,
        "key": "-Mnu71_BYp5YokQlvrg4",
        "keychapter": "-MnosmgmdFWwUg_Qyj5o"
    },
    {
        "name": "Заметки хобби № 7",
        "text": "Заметки хобби № 7",
        "time": 1636284129331,
        "key": "-Mnu7_uMv7uxZQNdvVOf",
        "keychapter": "-Mnot8F4fnIev0gGlnxg"
    },
    {
        "name": "Заметки хобби № 1",
        "text": "Заметки хобби № 1",
        "time": 1636284087310,
        "key": "-Mnu7QdYFIdU_yM1_eCE",
        "keychapter": "-Mnot8F4fnIev0gGlnxg"
    },
    {
        "name": "Заметки учеба №11",
        "style": "background-color: rgb(232, 250, 252); border: 1px solid rgb(178, 217, 236);",
        "text": "Заметки учеба №11",
        "time": 1636284065035,
        "key": "-Mnu7FEYa0Vr8GBoy_Mc",
        "keychapter": "-MnosmgmdFWwUg_Qyj5o"
    },
    {
        "name": "Заметки работа №2",
        "text": "Заметки работа №2",
        "time": 1636283923175,
        "key": "-Mnu6n_j_6Szfb5fRtuR",
        "keychapter": "1"
    },
    {
        "name": "Заметки работа №1",
        "text": "Заметки работа №1",
        "time": 1636283916422,
        "key": "-Mnu6lwJvGFmsBIjhPBh",
        "keychapter": "1"
    },
    {
        "name": "Мои заметки № 10",
        "text": "Мои заметки № 10",
        "time": 1636283900074,
        "key": "-Mnu6hxwC6QMIoX2YcMT",
        "keychapter": "0"
    },
    {
        "name": "Мои заметки № 8",
        "text": "Мои заметки № 8",
        "time": 1636283876009,
        "key": "-Mnu6c5GJtYyhTBYAQ9d",
        "keychapter": "0"
    },

];

describe('TaskChapter-test', () => {
    let openFormNewItemNew = jest.fn();
    let findName = jest.fn(() => "Заметки учеба");
    let findkey = jest.fn(() => "-MnosmgmdFWwUg_Qyj5o");
    let state = {
        TaskLists: taskLists,
        locationPathname: "zametki-ucheba",
        TaskListsItemsSort: taskListsItemsSort,
        perpage: 5,
        currentPage: 1,
    }
    const component = shallow(
        <TaskChapter {...state} cbopenFormNewItemNew={openFormNewItemNew} cbfindName={findName} cbfindkey={findkey} />
    );

    test('TaskChapter Snapshot zametki-ucheba', () => {
        expect(component).toMatchSnapshot();
    });
    test('TaskChapter Snapshot task-chapter__title', () => {
        const title = component.find(".task-chapter__title").text();
        expect(title).toBe("Заметки учеба");
    });
    test('TaskChapter  TaskItemContainer length', () => {
        const TaskItemContainerobj = component.find(TaskItemContainer);
        expect(TaskItemContainerobj).toHaveLength(3);
    });
    test('TaskChapter task-item__tools_Trash', () => {
        const btn = component.find(".task-chapter__tools__Plus");
        btn.simulate('click');
        expect(openFormNewItemNew).toHaveBeenCalled();
    });
});
describe('TaskChapter-test all', () => {
    let openFormNewItemNew = jest.fn();
    let findName = jest.fn();
    let findkey = jest.fn();
    let state = {
        TaskLists: taskLists,
        locationPathname: undefined,
        TaskListsItemsSort: taskListsItemsSort,
        perpage: 5,
        currentPage: 1,
    }
    const component = shallow(
        <TaskChapter {...state} cbopenFormNewItemNew={openFormNewItemNew} cbfindName={findName} cbfindkey={findkey} />
    );

    test('TaskChapter forTaskListschild', () => {
        const title = component.find(".task-chapter__title").text();
        expect(title).toBe("Все");
    });
    test('TaskChapter forTaskListschild length', () => {
        const TaskItemContainerobj = component.find(TaskItemContainer);
        expect(TaskItemContainerobj).toHaveLength(5);
    });
});








