import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class MenuTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    folder = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" ></path></svg>;

    render() {
        console.log("MenuTask ");
        console.log(this.props.TaskLists);
        return (

            <React.Fragment>
                {/*this.props.TaskLists.map((val) => <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink"> {this.folder() + " " + val.itemlist.name} </NavLink></li>

        )*/}
            </React.Fragment>
        );

    }

}

const mapStateToProps = function (state) {
    return {
        // весь раздел Redux state под именем counters будет доступен
        // данному компоненту как this.props.counters
        TaskLists: state.TaskLists,
    };
};

export default connect(mapStateToProps)(MenuTask);






