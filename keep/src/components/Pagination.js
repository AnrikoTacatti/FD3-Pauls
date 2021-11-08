"use strict";
import React from 'react';
import { NavLink } from 'react-router-dom';
import { actionPageNumber } from '../actions/Pagination.js';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

export class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.location.search != "" ? Number(this.props.location.search.match(/\d+/g)) : "all",
        }
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState((prevState) => { return { currentPage: newProps.currentPage === null ? prevState.currentPage : newProps.currentPage } });
    }

    render() {
        console.log("Pagination", this.props);
        const pageNumber = []
        for (let i = 1; i <= Math.ceil(this.props.total / this.props.perpage); i++) {
            pageNumber.push(i);
        }
        return (
            <ul className="pagination">
                {pageNumber.map((number) => <li key={number} className={number == this.state.currentPage ? "active" : ""} >
                    <NavLink to={this.props.location.pathname + "?page_" + number} onClick={actionPageNumber.bind(null, this.props.dispatch, number)} >{number}</NavLink></li>)}
                <li className={"all" === this.state.currentPage ? "active" : ""} ><NavLink to={this.props.location.pathname} onClick={actionPageNumber.bind(null, this.props.dispatch, "all")}>Все</NavLink></li>
            </ul>
        );

    }
}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        currentPage: state.stateTaskLists.currentPage,
    };
};

export default connect(mapStateToProps)(withRouter(Pagination));






