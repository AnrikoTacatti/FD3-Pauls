import React from 'react';
import { connect } from 'react-redux';
import {
    actioncloseFormNewTaskCaption,
    actioncloseFormEditTaskCaption,
    actionsetNewTaskCaption,
    actioneditTaskCaption
} from '../actions/FormTaskCaption.js';



export class FormTaskCaption extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            /* TaskLists: this.props.stateTaskLists.TaskLists*/
            openFormNewTaskCaption: false,
            openFormEditTaskCaption: false
        }
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({ openFormNewTaskCaption: newProps.openFormNewTaskCaption });
        this.setState({ openFormEditTaskCaption: newProps.openFormEditTaskCaption });
    }

    closeFormNewTaskCaption = () => {
        let data = false;
        actioncloseFormNewTaskCaption(data, this.props.dispatch)
    }

    closeFormEditTaskCaption = () => {
        let data = { active: false };
        actioncloseFormEditTaskCaption(data, this.props.dispatch);
    }

    addNewTaskCaption = () => {
        let data = { title: this.inputTaskListName.value };
        actionsetNewTaskCaption(data, this.props.dispatch);
    }

    editTaskCaption = () => {
        let data = { title: this.inputTaskListName.value, keychapter: this.state.openFormEditTaskCaption.keychapter };
        actioneditTaskCaption(data, this.props.dispatch);
    }


    render() {
        // console.log("FormTaskCaption", this.props);

        return (
            <React.Fragment>
                {this.state.openFormEditTaskCaption.active === true && <React.Fragment>
                    <div className="form-add-task-caption form">
                        <div className="form-inner">
                            <p className="form-title">Edit task list</p>
                            <input type="text" className="task-list-name" name="title" defaultValue={this.state.openFormEditTaskCaption.name} placeholder="Enter task list name" required="" ref={c => this.inputTaskListName = c} />
                        </div>
                        <div className="form-add-task-caption__footer">
                            <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeFormEditTaskCaption}>Cancel</button>
                            <button type="button" className="form-submit btn" onClick={this.editTaskCaption} >Submit</button>
                        </div>
                    </div>
                    <div className="form-bg"></div>
                </React.Fragment>
                }
                {this.state.openFormNewTaskCaption === true && <React.Fragment>
                    <div className="form-add-task-caption form">
                        <div className="form-inner">
                            <p className="form-title">Add task list</p>
                            <input type="text" className="task-list-name" name="phone" placeholder="Enter task list name" required="" ref={c => this.inputTaskListName = c} />
                        </div>
                        <div className="form-add-task-caption__footer">
                            <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeFormNewTaskCaption}>Cancel</button>
                            <button type="button" className="form-submit btn" onClick={this.addNewTaskCaption} >Submit</button>
                        </div>
                    </div>
                    <div className="form-bg"></div>
                </React.Fragment>
                }
            </React.Fragment>
        );

    }

}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        openFormNewTaskCaption: state.stateTaskLists.openFormNewTaskCaption,
        openFormEditTaskCaption: state.stateTaskLists.openFormEditTaskCaption,
    };
};

export default connect(mapStateToProps)(FormTaskCaption);






