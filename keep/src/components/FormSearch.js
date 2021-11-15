import React from 'react';
import { connect } from 'react-redux';
import { SEARH_TEXT } from '../stores/const.js';
import { withRouter } from "react-router";
class FormSearch extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    Sarch = () => {

        let data = { text: this.inputSarch.value };
        this.props.dispatch({ type: SEARH_TEXT, data });
        this.props.history.push("/FD3-Pauls/keep/public/serch/");

    }
    render() {
        return (
            <React.Fragment>
                <div className="form-search">
                    <div className="form-inner">
                        <input type="text" className="task-list-name" name="phone" placeholder="Search..." required="" ref={c => this.inputSarch = c} />
                        <button type="button" className="form-submit btn" onClick={this.Sarch} >Sarch</button>
                    </div>
                </div>

            </React.Fragment>
        );

    }

}



export default connect()(withRouter(FormSearch));






