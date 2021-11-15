"use strict";
import React from 'react';
import FormTaskItem from './FormTaskItem.js';
import TaskItemContainer from './TaskItemContainer.js';
import { icoSave } from '../ico/ico.js';
import { actionsaveBook } from '../actions/FormTaskItem.js';
class Main extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    forTaskListschild = () => {
        let tasklistitem = [];
        var i = 0;
        let listtask = this.props.TaskListsItemsSort;
        let length = 0;

        switch (true) {
            case listtask.length >= 4: length = 4; break;
            case listtask.length >= 3: length = 3; break;
            case listtask.length >= 2: length = 2; break;
            case listtask.length >= 1: length = 1; break;
        }

        for (let i = 1; i <= length; i++) {
            let keyitem = listtask[listtask.length - i].key;
            let keychapter = listtask[listtask.length - i].keychapter;
            tasklistitem.push(
                <TaskItemContainer data={listtask[listtask.length - i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={i}
                    attrdata={this.props.locationPathname !== undefined ? this.props.locationPathname : "all"}
                />
            )
        }

        return tasklistitem;
    }

    forPinTaskListschild = () => {
        let tasklistitem = [];
        let listtask = [];
        if (this.props.TaskListsItemsSort.length) this.props.TaskListsItemsSort.forEach(function (el, index, array) { el.pin === true && listtask.push(el) });
        let length = 0;

        switch (true) {
            case listtask.length >= 4: length = 4; break;
            case listtask.length >= 3: length = 3; break;
            case listtask.length >= 2: length = 2; break;
            case listtask.length >= 1: length = 1; break;
        }

        for (let i = 1; i <= length; i++) {
            let keyitem = listtask[listtask.length - i].key;
            let keychapter = listtask[listtask.length - i].keychapter;
            tasklistitem.push(
                <TaskItemContainer data={listtask[listtask.length - i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={i}
                    attrdata={this.props.locationPathname !== undefined ? this.props.locationPathname : "all"}
                />
            )
        }
        return tasklistitem;
    }
    saveBook = () => {
        let data = { text: this.bookText.value };
        actionsaveBook(data, this.props.dispatch);

    }

    render() {
        console.log("render Main");
        return (
            <React.Fragment>
                <div className="task-chapter task-chapter--main" >
                    <style>
                        {` .task-item{ -webkit-animation-name: none;
                                animation-name: none;} 
                            .${this.props.locationPathname !== undefined ? this.props.locationPathname : "all"} { 
                                -webkit-animation-name: slideInUp;
                                animation-name: slideInUp;
                                opacity: 0; }
                            `
                        }
                    </style>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Последние задачи
                        </div>
                    </div>
                    <div className="task-item-list">
                        {this.forTaskListschild()}
                    </div>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Закрепленные задачи
                        </div>
                    </div>
                    <div className="task-item-list">
                        {this.forPinTaskListschild()}
                    </div>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            Записная книжка
                        </div>
                    </div>
                    <div className="book" style={{ "animationDelay": `1s` }}>
                        <div className="book__title">Записная книжка <span className="book__save" onClick={this.saveBook}> {icoSave()} </span></div>
                        {console.log("Записная книжка")}
                        {this.props.Book !== undefined && <textarea className="book__text" ref={this.props.cbsetNewTextRef} defaultValue={this.props.Book !== undefined && this.props.Book.text} placeholder="Запишите что-нибудь"></textarea>}
                    </div>

                </div>
                <FormTaskItem />
            </React.Fragment>

        );
    }


}

export default Main;
