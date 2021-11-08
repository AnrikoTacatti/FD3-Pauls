"use strict";
import React from 'react';
import TaskItemContainer from './TaskItemContainer.js';
import Pagination from './Pagination.js';
import { icoPlus } from '../ico/ico.js';

class TaskChapter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    forhistoryTaskListschild = () => {
        let tasklistitem = [];
        let key = this.props.cbfindkey();
        if (key) {
            var i = 0;
            for (let tasklistskeychild in this.props.TaskLists[key].itemlist) {
                i++;
                let keyitem = this.props.TaskLists[key].itemlist[tasklistskeychild].key;
                tasklistitem.push(
                    <TaskItemContainer data={this.props.TaskLists[key].itemlist[tasklistskeychild]} keychapter={key} keyitem={keyitem} key={keyitem} index={i}
                        attrdata={this.props.locationPathname === undefined ? "all" : this.props.locationPathname} />

                )

            }
        }

        return tasklistitem;
    }


    forTaskListschild = () => {
        let tasklistitem = [];
        var i = 0;
        let listtask = this.props.TaskListsItemsSort;
        listtask = listtask.sort((a, b) => b.time - a.time);

        if (this.props.currentPage !== "all") {
            let lastIndex = this.props.perpage * this.props.currentPage;
            let firstIndex = lastIndex - this.props.perpage;
            listtask = listtask.slice(firstIndex, lastIndex);
        }

        for (let i = 0; i < listtask.length; i++) {
            let keyitem = listtask[i].key;
            let keychapter = listtask[i].keychapter;
            tasklistitem.push(
                <TaskItemContainer data={listtask[i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={i}
                    attrdata={this.props.locationPathname === undefined ? "all" : this.props.locationPathname}
                />
            )
        }
        return tasklistitem;
    }

    render() {
        console.log("render TaskChapter", this.props);
        return (
            <React.Fragment>
                <div className="task-chapter" id={this.props.locationPathname === undefined ? "all" : this.props.locationPathname}>
                    <style>
                        {` .task-item{ -webkit-animation-name: none;
                                animation-name: none;} 
                            .all{ 
                                -webkit-animation-name: slideInUpAll;
                                 animation-name: slideInUpAll;
                             }
                            `
                        }
                        {this.props.locationPathname !== undefined && `.${this.props.locationPathname !== undefined && this.props.locationPathname} { 
                        -webkit-animation-name: slideInUp;
                        animation-name: slideInUp;
                        opacity: 0; }` }
                    </style>
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            {Object.keys(this.props.TaskLists).length > 0 && (this.props.locationPathname === undefined ? "Все" : this.props.cbfindName())}

                        </div>
                        <div className="task-chapter__tools">
                            {Object.keys(this.props.TaskLists).length > 0 && (this.props.locationPathname !== undefined && <span className="task-chapter__tools__trash" onClick={this.openFormNewItemNew} >{icoPlus()} </span>)}

                        </div>
                    </div>
                    <div>{this.props.locationPathname === undefined && <Pagination perpage={this.props.perpage} total={this.props.TaskListsItemsSort.length} />}</div>
                    <div className="task-item-list">
                        {this.props.locationPathname === undefined ? this.forTaskListschild() : this.forhistoryTaskListschild()}
                    </div>
                </div>
            </React.Fragment>

        );
    }


}


export default TaskChapter;
