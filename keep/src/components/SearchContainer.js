"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Search from './Search.js';
import FormTaskItem from './FormTaskItem.js';

class SearchContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists,
            locationPathname: this.props.match.params.chapter,
            searchText: this.props.searchText,
        }

    }
    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists });
        this.setState({ locationPathname: newProps.match.params.chapter });
        this.setState({ searchText: newProps.searchText });
    }

    render() {
        console.log("render SearchContainer");
        console.log(this.props);
        return (
            <React.Fragment>
                <Search locationPathname={this.state.locationPathname} searchText={this.state.searchText} TaskLists={this.state.TaskLists} />
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
        searchText: state.stateTaskLists.searchText
    };
};

export default connect(mapStateToProps)(withRouter(SearchContainer));
