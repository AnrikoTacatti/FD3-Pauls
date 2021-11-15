"use strict";
import React from 'react';
import Pin from '../components/Pin';
import TaskItemContainer from '../components/TaskItemContainer.js';

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
        "pin": true,
        "text": "Заметки работа №2",
        "time": 1636283923175,
        "key": "-Mnu6n_j_6Szfb5fRtuR",
        "keychapter": "1"
    },
    {
        "name": "Заметки работа №1",
        "pin": true,
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

describe('Pin-test', () => {
    let state = {
        TaskListsItemsSort: taskListsItemsSort,
        locationPathname: "pin",
    }
    const component = shallow(
        <Pin locationPathname={state.locationPathname} TaskListsItemsSort={state.TaskListsItemsSort} />
    );

    test('Pin Snapshot', () => {
        expect(component).toMatchSnapshot();
    });
    test('Pin task-chapter__title', () => {
        const title = component.find(".task-chapter__title").text();
        expect(title).toBe("Закрепленные");
    });
    test('Search  TaskItemContainer length', () => {
        const TaskItemContainerobj = component.find(TaskItemContainer);
        expect(TaskItemContainerobj).toHaveLength(3);
    });
});



