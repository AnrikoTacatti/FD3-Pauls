"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import FormTaskItem from './FormTaskItem.js';
import TaskItem from './TaskItem.js';
import { OPEN_FORM_TASK_ITEM_NEW } from '../stores/const.js';

class TaskChapter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists,
            locationPathname: this.props.match.params.chapter
        }

    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists });
        this.setState({ locationPathname: newProps.match.params.chapter });
    }

    icoTrash = () => <svg className="ico-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" ></path></svg>;
    icoEdit = () => <svg className="ico-edit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" ></path></svg>;
    icoBell = () => <svg className="ico-bell" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" ></path></svg>;
    icoPin = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" ></path></svg>;
    icoPlus = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" ></path></svg>;

    openFormNewItemNew = () => {
        let key = this.findkey();
        this.props.dispatch({ type: OPEN_FORM_TASK_ITEM_NEW, data: { activ: true, keychapter: key } });

    }

    forTaskLists = () => {
        let menulist = [];
        for (let tasklistskey in this.state.TaskLists) {
            menulist.push(<span key={tasklistskey}> {this.state.TaskLists[tasklistskey].name} </span>)
        }
        return menulist;
    }

    forhistoryTaskListschild = () => {
        let tasklistitem = [];
        let key = this.findkey();
        for (let tasklistskeychild in this.state.TaskLists[key].itemlist) {
            debugger;
            tasklistitem.push(

                <TaskItem data={this.state.TaskLists[key].itemlist[tasklistskeychild]} keychapter={key} keyitem={tasklistskeychild} key={tasklistskeychild} />

            )
        }


        return tasklistitem;
    }
    forTaskListschild = () => {
        let tasklistitem = [];
        for (let tasklistskey in this.state.TaskLists) {
            for (let tasklistskeychild in this.state.TaskLists[tasklistskey].itemlist) {
                debugger;
                tasklistitem.push(

                    <TaskItem data={this.state.TaskLists[tasklistskey].itemlist[tasklistskeychild]} keychapter={tasklistskey} keyitem={tasklistskeychild} key={tasklistskeychild} />

                )
            }

        }
        return tasklistitem;
    }

    findName() {
        for (let tasklistskey in this.state.TaskLists) {
            if (this.state.TaskLists[tasklistskey].url == this.state.locationPathname) { return this.state.TaskLists[tasklistskey].name; }

        }
    }
    findkey() {
        for (let tasklistskey in this.state.TaskLists) {
            if (this.state.TaskLists[tasklistskey].url == this.state.locationPathname) { return tasklistskey; }

        }
    }
    render() {
        console.log("render TaskChapter");
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="task-chapter">
                    <div className="task-chapter__header">
                        <div className="task-chapter__title">
                            {this.state.locationPathname === undefined ? "Все" : this.findName()}

                        </div>
                        <div className="task-chapter__tools">
                            <span className="task-chapter__tools__edit">{this.icoEdit()} </span>
                            <span className="task-chapter__tools__trash">{this.icoTrash()} </span>
                            {this.state.locationPathname !== undefined && <span className="task-chapter__tools__trash" onClick={this.openFormNewItemNew} >{this.icoPlus()} </span>}

                        </div>
                    </div>
                    <div className="task-item-list">
                        {console.log("locationPathname")}
                        {console.log(this.state.locationPathname)}
                        {this.state.locationPathname === undefined ? this.forTaskListschild() : this.forhistoryTaskListschild()}




                    </div>
                </div>
                <FormTaskItem />
            </React.Fragment>

        );
    }


}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists
    };
};

export default connect(mapStateToProps)(withRouter(TaskChapter));
