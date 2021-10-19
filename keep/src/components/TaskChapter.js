"use strict";
import React from 'react';
import { connect } from 'react-redux';

class TaskChapter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        console.log("render TabsCompanys");
        console.log(this.props);
        return (

            <div className="task-chapter">
                <div className="task-chapter__header">
                    <div className="task-chapter__title">

                    </div>
                    <div className="task-chapter__tools">

                    </div>
                </div>
                <div className="task-item-list">
                    <div className="task-item">
                        <div className="task-item__title">task</div>
                        <div className="task-item__text">task task task</div>
                        <div className="task-item__footer">
                            <div className="task-item__tools">

                            </div>
                        </div>
                    </div>
                    <div className="task-item">
                        <div className="task-item__title">task</div>
                        <div className="task-item__text">task task task</div>
                        <div className="task-item__footer">
                            <div className="task-item__tools">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


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

export default connect(mapStateToProps)(TaskChapter);
