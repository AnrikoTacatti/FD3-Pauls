import React from 'react';
import { connect } from 'react-redux';
import {
    actioncloseFormNew,
    actioncloseFormEdit,
    actionsetNewTaskItem,
    setTaskItem
} from '../actions/FormTaskItem.js';

export class FormTaskItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openFormTaskItemEdit: false,
            openFormTaskItemNew: false,
            inputTaskItemNameRequired: true,
            inputTaskItemTextRequired: true,
        };
        this.inputTaskItemName = React.createRef();
        this.inputTaskItemText = React.createRef();

    }

    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({ openFormTaskItemEdit: newProps.openFormTaskItemEdit });
        this.setState({ openFormTaskItemNew: newProps.openFormTaskItemNew });

    }

    closeFormNew = () => {
        let data = { active: false };
        actioncloseFormNew(data, this.props.dispatch);
    }


    closeFormEdit = () => {
        let data = { active: false };
        actioncloseFormEdit(data, this.props.dispatch);
    }

    addNewTaskItem = () => {
        if (this.inputTaskItemName.current.value == "") {
            this.setState({ inputTaskItemNameRequired: false });
        }
        else {
            this.setState({ inputTaskItemNameRequired: true });
        }
        if (this.inputTaskItemText.current.value == "") {
            this.setState({ inputTaskItemTextRequired: false });
        }
        else {
            this.setState({ inputTaskItemTextRequired: true });
        }
        if (this.inputTaskItemName.current.value != "" && this.inputTaskItemText.current.value != "") {
            let data = { keychapter: this.state.openFormTaskItemNew.keychapter, title: this.inputTaskItemName.current.value, text: this.inputTaskItemText.current.value };
            actionsetNewTaskItem(data, this.props.dispatch);
        }
    }

    editTaskItem = () => {
        let data = { title: this.inputTaskItemName.value, text: this.inputTaskItemText.value, keychapter: this.state.openFormTaskItemEdit.keychapter, keyitem: this.state.openFormTaskItemEdit.keyitem };
        setTaskItem(data, this.props.dispatch);
    }

    render() {
        //  console.log("FormTaskItem", this.props);
        // console.log("FormTaskItem", this.state);
        return (
            <React.Fragment >
                {
                    this.state.openFormTaskItemNew.activ === true && <React.Fragment>
                        <div className="form-add-task-caption form">
                            <div className="form-inner">
                                <p className="form-title">Add task item</p>
                                <input type="text" className={`task-item-name ${this.state.inputTaskItemNameRequired == false ? "error" : ""}`} name="title" placeholder="Enter task item name" required="" ref={this.inputTaskItemName} />
                                <textarea className={`task-item-text ${this.state.inputTaskItemTextRequired == false ? "error" : ""}`} name="text" cols="60" rows="5" placeholder="Enter task item text" required="" ref={this.inputTaskItemText} />
                            </div>
                            <div className="form-add-task-caption__footer">
                                <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeFormNew}>Cancel</button>
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
                                <textarea className="task-item-text" defaultValue={this.state.openFormTaskItemEdit.text} name="text" cols="60" rows="5" placeholder="Enter task item text" required="" ref={c => this.inputTaskItemText = c} />
                            </div>
                            <div className="form-add-task-caption__footer">
                                <button type="button" title="Cancel" className="form-cancel btn" onClick={this.closeFormEdit}>Cancel</button>
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






