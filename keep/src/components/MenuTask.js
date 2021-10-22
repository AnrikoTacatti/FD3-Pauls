import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class MenuTask extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            TaskLists: this.props.stateTaskLists.TaskLists
        }
    }
    openFormNewTaskCaption = () => {
        this.props.dispatch({ type: "OPEN_FORM_TASK_CAPTION", data: true });
    }


    UNSAFE_componentWillReceiveProps = (newProps) => {
        this.setState({ TaskLists: newProps.stateTaskLists.TaskLists });
    }
    forTaskLists = () => {
        let menulist = [];
        for (let tasklistskey in this.state.TaskLists) {
            menulist.push(<li key={tasklistskey}><NavLink to={"/" + tasklistskey} exact className="PageLink" activeClassName="ActivePageLink" key={tasklistskey}> {this.folder()}  {this.state.TaskLists[tasklistskey].name} </NavLink></li>
            )
        }
        return menulist;
    }
    folder = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" ></path></svg>;
    plus = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" ></path></svg>;

    render() {
        console.log("MenuTask ");


        return (


            <React.Fragment>
                {console.log(this.props)}
                {console.log(this.state.TaskLists.length)}
                {<li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink" > {this.folder()} Все </NavLink></li>}
                {Object.keys(this.state.TaskLists).length > 0 && this.forTaskLists()}
                {
                    <li><span onClick={this.openFormNewTaskCaption}>{this.plus()} Create new list</span></li>

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






