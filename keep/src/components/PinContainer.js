"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Pin from './Pin.js';

class PinContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists,
            TaskListsItemsSort: this.props.stateTaskListsItemsSort,
            locationPathname: this.props.match.params.chapter,
        }

    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists });
        this.setState({ TaskListsItemsSort: newProps.stateTaskListsItemsSort });
        this.setState({ locationPathname: newProps.match.params.chapter });
    }

    render() {
        console.log("render PinContainer", this.props);
        return (
            <Pin locationPathname={this.state.locationPathname} TaskListsItemsSort={this.state.TaskListsItemsSort} />
        );
    }


}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists,
        stateTaskListsItemsSort: state.stateTaskLists.TaskListsItemsSort,
        searchText: state.stateTaskLists.searchText
    };
};

export default connect(mapStateToProps)(withRouter(PinContainer));
