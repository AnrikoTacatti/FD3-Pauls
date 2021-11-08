"use strict";
import React from 'react';
import { icoTrash, icoEdit, icoPin, icoColor } from '../ico/ico.js';

class TaskItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render TaskItem", this.props);
        return (
            <div className={`task-item ${this.props.del !== true ? this.props.attrdata : ""} ${this.props.data.style !== undefined ? "styled" : ""} ${this.props.del === true ? "del" : ""}`} data-keychapter={this.props.attrdata}
                style={{ "animationDelay": `${this.props.index * 0.05}s`, ...this.props.data.style }}
                data-key={this.props.keyitem}
                onAnimationEnd={this.props.cbdeleteTaskItem}

            >
                <div className="task-item__title">{this.props.data.name}</div>
                <div className="task-item__text">{this.props.data.text}</div>


                <div className="task-item__footer">
                    <div className="task-item__tools">
                        <span className="task-item__tools_Pin" onClick={this.props.cbsetPin}>{icoPin(this.props.data.pin)}</span>
                        <span onClick={this.props.cbopenFormNewItemEdit} className="task-item__tools_Edit" >{icoEdit()}</span>
                        <span onClick={this.props.cbaddDel} className="task-item__tools_Trash">{icoTrash()}</span>
                        <span className="task-item__tools_Color">
                            <span className="task-item__tools_Color-list">
                                <span className="color" onClick={this.props.cbsetColor} style={{ "backgroundColor": "#fff4ba", "border": "1px solid #fbe67b" }}></span>
                                <span className="color" onClick={this.props.cbsetColor} style={{ "backgroundColor": "#e8fafc", "border": "1px solid #b2d9ec" }}></span>
                                <span className="color" onClick={this.props.cbsetColor} style={{ "backgroundColor": "#ffecf1", "border": "1px solid #f9c8ca" }}></span>
                            </span>
                            {icoColor()}
                        </span>
                        <span className="task-item__date">{this.props.data.time !== undefined && this.props.cbgetTime(this.props.data.time)}</span>
                    </div>
                </div>
            </div >
        )
    }


}


export default TaskItem;
