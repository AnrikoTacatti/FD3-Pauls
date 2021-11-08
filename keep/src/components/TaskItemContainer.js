"use strict";
import React from 'react';
import { connect } from 'react-redux';
import api from '../api/api.js';
import TaskItem from './TaskItem.js';
class TaskItemContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            keychapter: this.props.keychapter,
            keyitem: this.props.keyitem,
            del: false
        }


    }

    openFormNewItemEdit = () => {
        this.props.dispatch({ type: "OPEN_FORM_TASK_ITEM_EDIT", data: { name: this.props.data.name, text: this.props.data.text, activ: true, keychapter: this.props.keychapter, keyitem: this.props.keyitem } });

    }
    deleteTaskItem = () => {

        if (this.state.del === true) {
            let isDelete = window.confirm("Вы действительно хотите удалить?");
            if (isDelete) {
                this.divitem.className = this.divitem.className + " del";
                let data = { keychapter: this.state.keychapter, keyitem: this.state.keyitem };
                api.removeTaskItem(data, this.props.dispatch);
            }
            else {
                this.setState({ del: false });
            }
        }
    }
    addDel = () => {
        this.setState({ del: true });
    }
    getTime(timestamp) {
        let d = new Date(timestamp);
        let timeStampCon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
        return timeStampCon;
    }
    setColor = (e) => {
        debugger;
        let data = { style: e.target.getAttribute("style"), keychapter: this.state.keychapter, keyitem: this.state.keyitem };
        api.setTaskItemStyle(data, this.props.dispatch);
    }
    setPin = (ifo) => {
        let pin = true;
        if (ifo === true) pin = false;
        let data = { pin: pin, keychapter: this.state.keychapter, keyitem: this.state.keyitem };
        api.setTaskItemPin(data, this.props.dispatch);
    }

    render() {
        console.log("render TaskItemContainer");
        console.log(this.props);
        return (
            <TaskItem {...this.props} del={this.state.del} cbopenFormNewItemEdit={this.openFormNewItemEdit} cbsetPin={this.setPin} cbopenFormNewItemEdit={this.openFormNewItemEdit}
                cbaddDel={this.addDel} cbdeleteTaskItem={this.deleteTaskItem} cbgetTime={this.getTime} cbsetColor={this.setColor} ></TaskItem>
        )
    }


}

/*const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists,

    };
};*/

export default connect()(TaskItemContainer);
