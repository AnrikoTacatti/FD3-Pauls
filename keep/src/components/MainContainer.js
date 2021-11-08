"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import FormTaskItem from './FormTaskItem.js';
import Main from './Main.js';
import api from '../api/api.js';

class MainContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskListsItemsSort: this.props.stateTaskListsItemsSort,
            locationPathname: this.props.match.params.chapter,
            Book: this.props.Book
        }

    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskListsItemsSort: newProps.stateTaskListsItemsSort });
        this.setState({ locationPathname: newProps.match.params.chapter });
        this.setState({ Book: newProps.Book });
    }

    saveBook = () => {
        let data = { text: this.bookText.value };
        api.saveBook(data, this.props.dispatch);

    }
    setNewTextRef = (ref) => {
        this.bookText = ref;
    };

    render() {
        console.log("render MainContainer");
        return (
            <React.Fragment>
                <Main {...this.state} cbsetNewTextRef={this.setNewTextRef} cbsaveBook={this.saveBook} />
                <FormTaskItem />
            </React.Fragment>
        );
    }


}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskListsItemsSort: state.stateTaskLists.TaskListsItemsSort,
        Book: state.stateTaskLists.Book
    };
};

export default connect(mapStateToProps)(withRouter(MainContainer));
