"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import FormTaskItem from './FormTaskItem.js';
import TaskChapter from '../components/TaskChapter';
import {
    actionopenFormNewItemNew
} from '../actions/TaskChapter.js';

export class TaskChapterContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists,
            locationPathname: this.props.match.params.chapter,
            TaskListsItemsSort: this.props.taskListsItemsSort,
            perpage: 24,
            currentPage: this.props.location.search != "" ? Number(this.props.location.search.match(/\d+/g)) : "all",
        }
    }
    componentDidMount = () => {
        if (window.innerWidth <= 1365) {
            this.setState({ perpage: 18 });
        }
        if (window.innerWidth <= 768) {
            this.setState({ perpage: 12 });
        }
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists });
        this.setState({ locationPathname: newProps.match.params.chapter });
        this.setState({ TaskListsItemsSort: newProps.taskListsItemsSort });
        this.setState((prevState) => { return { currentPage: newProps.currentPage === null ? prevState.currentPage : newProps.currentPage } });
    }

    openFormNewItemNew = () => {
        let key = this.findkey();
        let data = { activ: true, keychapter: key };
        actionopenFormNewItemNew(data, this.props.dispatch);
    }

    findName = () => {
        for (let tasklistskey in this.state.TaskLists) {
            if (this.state.TaskLists[tasklistskey].url == this.state.locationPathname) { return this.state.TaskLists[tasklistskey].name; }
        }
    }

    findkey = () => {
        for (let tasklistskey in this.state.TaskLists) {
            if (this.state.TaskLists[tasklistskey].url == this.state.locationPathname) { return tasklistskey; }
        }
    }

    render() {
        //console.log("render TaskChapterContainer", this.state, this.props);
        return (
            <React.Fragment>
                <TaskChapter {...this.state} cbopenFormNewItemNew={this.openFormNewItemNew} cbfindName={this.findName} cbfindkey={this.findkey} />
                <FormTaskItem />
            </React.Fragment>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists,
        taskListsItemsSort: state.stateTaskLists.TaskListsItemsSort,
        currentPage: state.stateTaskLists.currentPage,
    };
};

export default connect(mapStateToProps)(withRouter(TaskChapterContainer));
