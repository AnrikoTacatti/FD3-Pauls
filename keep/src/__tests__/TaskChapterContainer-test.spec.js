"use strict";
import React from 'react';
import { TaskChapterContainer } from '../components/TaskChapterContainer';
jest.mock('../actions/TaskChapter.js');
import {
    actionopenFormNewItemNew
} from '../actions/TaskChapter.js';


let tateTaskLists = {
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
    let state = {
        stateTaskLists: tateTaskLists,
        match: { params: { chapter: "zametki-ucheba" } },
        TaskListsItemsSort: taskListsItemsSort,
        perpage: 5,
        location: { "search": "" }
    }

    let dispatch = jest.fn();
    actionopenFormNewItemNew.mockImplementation((data, dispatch) => { return data; });

    const component = shallow(<TaskChapterContainer {...state} dispatch={dispatch} />);
    const instance = component.instance();
    test('TaskItemContainer  openFormNewItemNew', () => {
        instance.openFormNewItemNew();
        expect(actionopenFormNewItemNew).toHaveBeenCalledWith({ activ: true, keychapter: "-MnosmgmdFWwUg_Qyj5o" }, dispatch);
    });

    test('TaskItemContainer findkey', () => {
        instance.findkey();
        expect(instance.findkey()).toBe("-MnosmgmdFWwUg_Qyj5o");
    });
    test('TaskItemContainer findName', () => {
        instance.findName();
        expect(instance.findName()).toBe("Заметки учеба");
    });

});




