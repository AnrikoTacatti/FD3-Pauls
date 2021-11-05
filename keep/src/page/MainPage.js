"use strict";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../api/api.js';

import PageRouter from '../components/PageRouter.js';
import MenuPage from '../components/MenuPage.js';
import MenuTask from '../components/MenuTask.js';
import FormTaskCaption from '../components/FormTaskCaption.js';
import FormSearch from '../components/FormSearch.js';


class TaskMain extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        }
    }




    loadTaskLists = () => {
        api.getTask(this.props.dispatch);


    }
    Menu = () => {
        this.setState((prevState) => { return { openMenu: !prevState.openMenu } });
    }
    /* componentWillMount = () => {
         /*TaskListsActions.loadTaskList(this.props.params.id);*/
    /* TasksActions.loadTasks(this.props.params.id);*/
    /* }*/

    componentDidMount = () => {
        console.log("componentDidMount");
        this.loadTaskLists();

    }

    render() {

        console.log("render TaskMains");

        return (

            <BrowserRouter>
                <div className="container">
                    <h1> TASK APP  <span className="mb-menu" onClick={this.Menu}  >
                        {this.state.openMenu === false && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>}
                        {this.state.openMenu === true && <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" ></path></svg>}

                    </span></h1>
                    <div className="task-app-content">
                        <aside className={this.state.openMenu === true ? 'active' : ''}>
                            <h1> TASK </h1>
                            <FormSearch />
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

            </BrowserRouter >
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

