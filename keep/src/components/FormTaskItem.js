import React from 'react';
import { connect } from 'react-redux';
import api from '../api/api.js';
import { OPEN_FORM_TASK_ITEM_NEW, OPEN_FORM_TASK_ITEM_EDIT } from '../stores/const.js';

class FormTaskItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            /* TaskLists: this.props.stateTaskLists.TaskLists*/
            openFormNewTaskItem: false,
            openFormTaskItemEdit: false,
            openFormTaskItemNew: false

        }
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ openFormTaskItemEdit: newProps.openFormTaskItemEdit });
        this.setState({ openFormTaskItemNew: newProps.openFormTaskItemNew });

    }

    closeForm = () => {
        this.props.dispatch({ type: OPEN_FORM_TASK_ITEM_EDIT, data: { active: false } });
        this.props.dispatch({ type: OPEN_FORM_TASK_ITEM_NEW, data: { active: false } });
    }

    addNewTaskItem = () => {
        let data = { keychapter: this.state.openFormTaskItemNew.keychapter, title: this.inputTaskItemName.value, text: this.inputTaskItemText.value };
        api.setNewTaskItem(data, this.props.dispatch);

    }

    editTaskItem = () => {
        let data = { title: this.inputTaskItemName.value, text: this.inputTaskItemText.value, keychapter: this.state.openFormTaskItemEdit.keychapter, keyitem: this.state.openFormTaskItemEdit.keyitem };
        api.setTaskItem(data, this.props.dispatch);

    }

    render() {
        console.log("FormTaskCaption");
        console.log(this.props);
        console.log(this.state);
        return (
            <React.Fragment >
                {
                    this.state.openFormTaskItemNew.activ === true && <React.Fragment>
                        <div className="form-add-task-caption form">
                            <div className="form-inner">
                                <p className="form-title">Add task item</p>
                                <input type="text" className="task-item-name" name="title" placeholder="Enter task item name" required="" ref={c => this.inputTaskItemName = c} />
                                <textarea type="text" className="task-item-text" name="text" cols="60" rows="5" placeholder="Enter task item text" required="" ref={c => this.inputTaskItemText = c} />
                            </div>
                            <div className="form-add-task-caption__footer">
                                <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeForm}>Cancel</button>
                                <button type="button" className="form-submit btn" onClick={this.addNewTaskItem} >Submit</button>
                            </div>
                        </div>
                        <div className="form-bg"></div>
                    </React.Fragment>
                }
                {
                    this.state.openFormTaskItemEdit.activ === true && <React.Fragment>
                        <div className="form-add-task-caption form">
                            <div className="form-inner">
                                <p className="form-title">Edit task item</p>
                                <input type="text" className="task-item-name" defaultValue={this.state.openFormTaskItemEdit.name} name="name" placeholder="Enter task item name" required="" ref={c => this.inputTaskItemName = c} />
                                <textarea type="text" className="task-item-text" defaultValue={this.state.openFormTaskItemEdit.text} name="text" cols="60" rows="5" placeholder="Enter task item text" required="" ref={c => this.inputTaskItemText = c} />
                            </div>
                            <div className="form-add-task-caption__footer">
                                <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeForm}>Cancel</button>
                                <button type="button" className="form-submit btn" onClick={this.editTaskItem} >Submit</button>
                            </div>
                        </div>
                        <div className="form-bg"></div>
                    </React.Fragment>
                }
            </React.Fragment >
        );

    }

}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        openFormTaskItemEdit: state.stateTaskLists.openFormTaskItemEdit,
        openFormTaskItemNew: state.stateTaskLists.openFormTaskItemNew
    };
};

export default connect(mapStateToProps)(FormTaskItem);






