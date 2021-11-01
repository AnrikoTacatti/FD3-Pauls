"use strict";
import React from 'react';
import { connect } from 'react-redux';
import api from '../api/api.js';

class TaskItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists,
            keychapter: this.props.keychapter,
            keyitem: this.props.keyitem,
        }


    }

    openFormNewItemEdit = () => {
        this.props.dispatch({ type: "OPEN_FORM_TASK_ITEM_EDIT", data: { name: this.props.data.name, text: this.props.data.text, activ: true, keychapter: this.props.keychapter, keyitem: this.props.keyitem } });

    }
    deleteTaskItem = () => {
        debugger;
        this.divitem.className = this.divitem.className + " del";
        setTimeout(() => {
            let data = { keychapter: this.state.keychapter, keyitem: this.state.keyitem };
            api.removeTaskItem(data, this.props.dispatch);
        }, 1000);


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
    CSSstring(string) {
        if (string) {
            const css_json = `{"${string
                .replace(/; /g, '", "')
                .replace(/: /g, '": "')
                .replace(";", "")}"}`;

            const obj = JSON.parse(css_json);

            const keyValues = Object.keys(obj).map((key) => {
                var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
                return { [camelCased]: obj[key] };
            });
            return Object.assign({}, ...keyValues);
        }
    }


    icoTrash = () => <svg className="ico-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" ></path></svg>;
    icoEdit = () => <svg className="ico-edit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" ></path></svg>;
    icoBell = () => <svg className="ico-bell" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" ></path></svg>;
    icoPin = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" ><path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" ></path></svg>;
    icoColor = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" ></path></svg>;

    render() {
        console.log("render TaskChapter");
        console.log(this.props);


        return (
            <div className={`task-item ${this.props.attrdata} ${this.props.data.style !== undefined && "styled"}`} data-keychapter={this.props.attrdata} style={{ "animationDelay": `${this.props.index * 0.05}s`, ...this.CSSstring(this.props.data.style) }} ref={c => this.divitem = c}
                data-key={this.props.keyitem}

            >
                <div className="task-item__title">{this.props.data.name}</div>
                <div className="task-item__text">{this.props.data.text}</div>


                <div className="task-item__footer">
                    <div className="task-item__tools">
                        <span className="task-item__tools_Pin" onClick={this.setPin}>{this.icoPin(this.props.data.pin)}</span>
                        <span onClick={this.openFormNewItemEdit} className="task-item__tools_Edit" >{this.icoEdit()}</span>
                        <span onClick={this.deleteTaskItem} className="task-item__tools_Trash">{this.icoTrash()}</span>
                        <span className="task-item__tools_Color">
                            <span className="task-item__tools_Color-list">
                                <span className="color" onClick={this.setColor} style={{ "background-color": "#fff4ba", "border": "1px solid #fbe67b" }}></span>
                                <span className="color" onClick={this.setColor} style={{ "background-color": "#e8fafc", "border": "1px solid #b2d9ec" }}></span>
                                <span className="color" onClick={this.setColor} style={{ "background-color": "#ffecf1", "border": "1px solid #f9c8ca" }}></span>
                            </span>
                            {this.icoColor()}
                        </span>
                        <span className="task-item__date">{this.props.data.time !== undefined && this.getTime(this.props.data.time)}</span>
                    </div>
                </div>
            </div >
        )
    }


}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        stateTaskLists: state.stateTaskLists.TaskLists,

    };
};

export default connect(mapStateToProps)(TaskItem);
