import React from 'react';
import { connect } from 'react-redux';
import api from '../api/api.js';

class FormTaskCaption extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            /* TaskLists: this.props.stateTaskLists.TaskLists*/
            openFormNewTaskCaption: false
        }
    }


    closeFormNewTaskCaption = () => {
        this.props.dispatch({ type: "OPEN_FORM_TASK_CAPTION", data: false });
    }

    addNewTaskCaption = () => {
        api.setNewTaskCaption(this.inputTaskListName.value, this.props.dispatch);

    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ openFormNewTaskCaption: newProps.openFormNewTaskCaption });
    }

    render() {
        console.log("FormTaskCaption");
        console.log(this.props);
        console.log(this.state);
        return (
            <React.Fragment>
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
    };
};

export default connect(mapStateToProps)(FormTaskCaption);






