import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { icoTrash, icoEdit, icoPin, icoFolder, icoPlus } from '../ico/ico.js';
import {
    actionopenFormNewTaskCaption,
    actionopenFormEditTaskCaption,
    actiondeleteChapter

} from '../actions/MenuTask.js';



export class MenuTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists
        }
    }
    openFormNewTaskCaption = () => {
        actionopenFormNewTaskCaption(true, this.props.dispatch);

    }
    openFormEditTaskCaption = (keychapter, name, e) => {
        let data = { active: true, keychapter: keychapter, name: name };
        actionopenFormEditTaskCaption(data, this.props.dispatch);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({ TaskLists: newProps.stateTaskLists });
    }

    deleteChapter = (keychapter, e) => {
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            let data = { keychapter: keychapter };
            actiondeleteChapter(data, this.props.dispatch)
        }
    }
    forTaskLists = () => {
        let menulist = [];
        for (let tasklistskey in this.state.TaskLists) {
            menulist.push(
                <li key={tasklistskey}>
                    <NavLink to={"/FD3-Pauls/keep/public/chapter/" + this.state.TaskLists[tasklistskey].url} exact className="PageLink" activeClassName="ActivePageLink" key={tasklistskey}>
                        {icoFolder()}  {this.state.TaskLists[tasklistskey].name}
                    </NavLink>
                    <span className="openFormEditTaskCaption" onClick={this.openFormEditTaskCaption.bind(null, tasklistskey, this.state.TaskLists[tasklistskey].name)}>{icoEdit()}</span>
                    <span className="deleteChapter" onClick={this.deleteChapter.bind(null, tasklistskey)}>{icoTrash()}</span>
                </li>
            )

        }
        return menulist;
    }

    render() {
        // console.log("MenuTask ");
        return (
            <React.Fragment>
                {<li><NavLink to="/FD3-Pauls/keep/public/chapter" exact className="PageLink" activeClassName="ActivePageLink" > {icoFolder()} Все </NavLink></li>}
                {<li><NavLink to="/FD3-Pauls/keep/public/pin" exact className="PageLink" activeClassName="ActivePageLink" > {icoPin()} Закрепленные </NavLink></li>}
                {Object.keys(this.state.TaskLists).length > 0 && this.forTaskLists()}
                {
                    <li><span className="openFormNewTaskCaption" onClick={this.openFormNewTaskCaption}>{icoPlus()} Create new list</span></li>

                }
            </React.Fragment >
        );
    }
}
const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists
    };
};
export default connect(mapStateToProps)(MenuTask);










