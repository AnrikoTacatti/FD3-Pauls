"use strict";
import React from 'react';
import MenuPage from '../components/MenuPage.js';
import MenuTask from '../components/MenuTask.js';
import PageRouter from '../components/PageRouter.js';

import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../api/api.js';

class TaskMain extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    loadTaskLists = () => {
        console.log("loadTaskLists");
        let loadTaskLists = api.getTask();
        this.props.dispatch({ type: 'TASKS_LOAD_REQUEST', tasklists: loadTaskLists });
    }

    componentWillMount = () => {
        /*TaskListsActions.loadTaskList(this.props.params.id);*/
        /* TasksActions.loadTasks(this.props.params.id);*/
    }

    componentDidMount = () => {
        this.loadTaskLists();
    }

    render() {
        console.log("render TabsCompanys");
        return (
            <BrowserRouter>
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

                            <div className="task-chapter">
                                <div className="task-chapter__header">
                                    <div className="task-chapter__title">

                                    </div>
                                    <div className="task-chapter__tools">

                                    </div>
                                </div>
                                <div className="task-item-list">
                                    <div className="task-item">
                                        <div className="task-item__title"></div>
                                        <div className="task-item__text"></div>
                                        <div className="task-item__footer">
                                            <div className="task-item__tools">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
};

export default connect()(TaskMain);