"use strict";
import React from 'react';
import TaskItemContainer from './TaskItemContainer.js';

class Search extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    forTaskListschild = () => {
        let tasklistitem = [];
        var i = 0;
        let listtask = this.props.TaskLists;
        if (this.props.searchText !== null) {
            let index = 0;
            for (let i = 0; i < listtask.length; i++) {
                let keyitem = listtask[i].key;
                let keychapter = listtask[i].keychapter;
                if (listtask[i].name.toLowerCase().indexOf(this.props.searchText.toLowerCase().trim()) !== -1 || listtask[i].text.toLowerCase().indexOf(this.props.searchText.toLowerCase().trim()) !== -1) {
                    index++;
                    tasklistitem.push(
                        <TaskItemContainer data={listtask[i]} keychapter={keychapter} keyitem={keyitem} key={keyitem} index={index}
                            attrdata={this.props.locationPathname === undefined ? "all" : this.props.locationPathname}
                        />
                    )
                }
            }
        }
        if (tasklistitem.length == 0 || this.props.searchText === null) {
            return "Поиск не дал результатов"
        }
        return tasklistitem;
    }

    render() {
        // console.log("render Search", this.props);
        return (
            <React.Fragment>
                <div className="task-chapter">
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
                            Результат поиска
                        </div>

                    </div>
                    <div className="task-item-list">
                        {this.forTaskListschild()}
                    </div>
                </div>
            </React.Fragment>

        );
    }


}

export default Search;
