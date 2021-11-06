import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { OPEN_FORM_NEW_TASK_CAPTION, OPEN_FORM_EDIT_TASK_CAPTION } from '../stores/const.js';
import api from '../api/api.js';

class MenuTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists.TaskLists
        }
    }
    openFormNewTaskCaption = () => {
        this.props.dispatch({ type: OPEN_FORM_NEW_TASK_CAPTION, data: true });
    }
    openFormEditTaskCaption = (keychapter, name, e) => {
        console.log("openFormEditTaskCaption");
        this.props.dispatch({ type: OPEN_FORM_EDIT_TASK_CAPTION, data: { active: true, keychapter: keychapter, name: name } });
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists.TaskLists });
    }
    deleteChapter = (keychapter, e) => {
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            let data = { keychapter: keychapter };
            api.removeTaskCaption(data, this.props.dispatch);

        }

    }
    forTaskLists = () => {
        let menulist = [];

        for (let tasklistskey in this.state.TaskLists) {
            menulist.push(
                <li key={tasklistskey}>
                    <NavLink to={"/chapter/" + this.state.TaskLists[tasklistskey].url} exact className="PageLink" activeClassName="ActivePageLink" key={tasklistskey}>
                        {this.folder()}  {this.state.TaskLists[tasklistskey].name}
                    </NavLink>
                    <span onClick={this.openFormEditTaskCaption.bind(null, tasklistskey, this.state.TaskLists[tasklistskey].name)}>{this.icoEdit()}</span>
                    <span onClick={this.deleteChapter.bind(null, tasklistskey)}>{this.icoTrash()}</span>
                </li>
            )

        }

        return menulist;
    }

    folder = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" ></path></svg>;
    plus = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" ></path></svg>;
    icoTrash = () => <svg className="ico-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" ></path></svg>;
    icoEdit = () => <svg className="ico-edit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" ></path></svg>;
    icoPin = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" ></path></svg>;

    render() {
        console.log("MenuTask ");
        return (
            <React.Fragment>
                {<li><NavLink to="/chapter" exact className="PageLink" activeClassName="ActivePageLink" > {this.folder()} Все </NavLink></li>}
                {<li><NavLink to="/pin" exact className="PageLink" activeClassName="ActivePageLink" > {this.icoPin()} Закрепленные </NavLink></li>}
                {Object.keys(this.state.TaskLists).length > 0 && this.forTaskLists()}
                {
                    <li><span onClick={this.openFormNewTaskCaption}>{this.plus()} Create new list</span></li>

                }
            </React.Fragment >
        );

    }

}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists,
    };
};

export default connect(mapStateToProps)(MenuTask);










