"use strict";
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem.js';
import {
    actionopenFormNewItemEdit,
    actionremoveTaskItem,
    actionsetTaskItemStyle,
    actionsetTaskItemPin
} from '../actions/TaskItem.js';


export class TaskItemContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            keychapter: this.props.keychapter,
            keyitem: this.props.keyitem,
            del: false
        }
    }

    openFormNewItemEdit = () => {
        let data = { name: this.props.data.name, text: this.props.data.text, activ: true, keychapter: this.props.keychapter, keyitem: this.props.keyitem };
        actionopenFormNewItemEdit(data, this.props.dispatch);
    }
    deleteTaskItem = () => {
        if (this.state.del === true) {
            let isDelete = window.confirm("Вы действительно хотите удалить?");
            if (isDelete) {
                this.divitem.className = this.divitem.className + " del";
                let data = { keychapter: this.state.keychapter, keyitem: this.state.keyitem };
                actionremoveTaskItem(data, this.props.dispatch);
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

    setColor = (style, e) => {
        let data = { style: style, keychapter: this.state.keychapter, keyitem: this.state.keyitem };
        actionsetTaskItemStyle(data, this.props.dispatch);
    }

    setPin = (ifo) => {
        let pin = true;
        if (ifo === true) pin = false;
        let data = { pin: pin, keychapter: this.state.keychapter, keyitem: this.state.keyitem };
        actionsetTaskItemPin(data, this.props.dispatch);
    }

    render() {
        // console.log("render TaskItemContainer", this.props);
        return (
            <TaskItem {...this.props} del={this.state.del} cbopenFormNewItemEdit={this.openFormNewItemEdit} cbsetPin={this.setPin}
                cbaddDel={this.addDel} cbdeleteTaskItem={this.deleteTaskItem} cbgetTime={this.getTime} cbsetColor={this.setColor} ></TaskItem>
        )
    }
}

export default connect()(TaskItemContainer);
