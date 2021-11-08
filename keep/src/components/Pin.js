"use strict";
import React from 'react';
import FormTaskItem from './FormTaskItem.js';
import TaskItemContainer from './TaskItemContainer.js';

class Pin extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    forTaskListschild = () => {
        let tasklistitem = [];
        var i = 0;
        let listtask = [];
        if (this.props.TaskListsItemsSort.length) listtask = this.props.TaskListsItemsSort;

        let index = 0;
        for (let i = 0; i < this.props.TaskListsItemsSort.length; i++) {
            let keyitem = listtask[i].key;
            let keychapter = listtask[i].keychapter;
            if (listtask[i].pin === true) {
                index++;
                tasklistitem.push(
                    <TaskItemContainer data={listtask[i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={index}
                        attrdata={this.props.locationPathname === undefined ? "all" : this.props.locationPathname}
                    />
                )
            }
        }
        if (tasklistitem.length == 0) {
            return "Закрепленных нет"
        }
        return tasklistitem;
    }

    render() {
        console.log("render Pin", this.props);
        return (
            <React.Fragment>
                <div className="task-chapter" >
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
                            Закрепленные
                        </div>

                    </div>
                    <div className="task-item-list">
                        {this.forTaskListschild()}
                    </div>
                </div>
                <FormTaskItem />
            </React.Fragment>

        );
    }
}

export default Pin;
