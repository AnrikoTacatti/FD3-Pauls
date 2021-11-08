import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { OPEN_FORM_NEW_TASK_CAPTION, OPEN_FORM_EDIT_TASK_CAPTION } from '../stores/const.js';
import api from '../api/api.js';
import { icoTrash, icoEdit, icoPin, icoFolder, icoPlus } from '../ico/ico.js';

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
                        {icoFolder()}  {this.state.TaskLists[tasklistskey].name}
                    </NavLink>
                    <span onClick={this.openFormEditTaskCaption.bind(null, tasklistskey, this.state.TaskLists[tasklistskey].name)}>{icoEdit()}</span>
                    <span onClick={this.deleteChapter.bind(null, tasklistskey)}>{icoTrash()}</span>
                </li>
            )

        }
        return menulist;
    }

    render() {
        console.log("MenuTask ");
        return (
            <React.Fragment>
                {<li><NavLink to="/chapter" exact className="PageLink" activeClassName="ActivePageLink" > {icoFolder()} Все </NavLink></li>}
                {<li><NavLink to="/pin" exact className="PageLink" activeClassName="ActivePageLink" > {icoPin()} Закрепленные </NavLink></li>}
                {Object.keys(this.state.TaskLists).length > 0 && this.forTaskLists()}
                {
                    <li><span onClick={this.openFormNewTaskCaption}>{icoPlus()} Create new list</span></li>

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










