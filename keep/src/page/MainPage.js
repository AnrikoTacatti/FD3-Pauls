"use strict";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../api/api.js';

import PageRouter from '../components/PageRouter.js';
import MenuPage from '../components/MenuPage.js';
import MenuTask from '../components/MenuTask.js';
import FormTaskCaption from '../components/FormTaskCaption.js';



class TaskMain extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    loadTaskLists = () => {
        api.getTask(this.props.dispatch);


    }

    componentWillMount = () => {
        /*TaskListsActions.loadTaskList(this.props.params.id);*/
        /* TasksActions.loadTasks(this.props.params.id);*/
    }

    componentDidMount = () => {
        console.log("componentDidMount");
        this.loadTaskLists();

    }

    render() {

        console.log("render TaskMains");

        return (

            <BrowserRouter history={this.props.history}>
                <div className="container">
                    <h1> TASK APP</h1>
                    <div className="task-app-content">
                        <aside>
                            <h1> TASK </h1>
                            <div className="main-menu">
                                <ul className="menu-page">
                                    <MenuPage />
                                </ul>


                                <p className="main-menu__title">Task Lists</p>
                                <ul className="menu-task">
                                    <MenuTask />
                                </ul>
                            </div>
                        </aside>
                        <section>

                            <PageRouter />


                        </section>
                    </div>
                    <FormTaskCaption />
                </div>

            </BrowserRouter>
        );
    }
};
const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists,
    };
};
export default connect(mapStateToProps)(TaskMain);