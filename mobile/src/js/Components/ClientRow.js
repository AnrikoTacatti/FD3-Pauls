
import React from 'react';
import '../css/style.css';
import { voteEvents } from '../events';

export default class ProductRow extends React.PureComponent {

    constructor(props) {
        super(props);
        this.Edit = this.Edit.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Selected = this.Selected.bind(this);
    }


    Edit(index, e) {
        e.stopPropagation();
        voteEvents.emit('EsetEditid', index);
    }

    Delete(productid, e) {
        e.stopPropagation();
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            voteEvents.emit('EDelete', productid);

        }
    }

    Selected(productid, e) {
        if (this.props.selectid === productid) {
            voteEvents.emit('EsetSelectid', null);
        }
        else {
            voteEvents.emit('EsetSelectid', productid);

        }

    }

    render() {

        console.log("render ProductRow");
        console.log(this.props.el.id);
        debugger;
        return (
            <tr onClick={this.Selected.bind(null, this.props.el.id)} className={`ClientRow${this.props.selectid === this.props.el.id ? " select" : ""}`} >
                <td td > {this.props.el.surname}</td >
                <td>{this.props.el.name}</td>
                <td>{this.props.el.patronymic}</td>
                <td>{this.props.el.balans}</td>
                <td className={this.props.el.status} >{this.props.el.status}</td>

                <td>
                    <input type="button" value="редактировать" onClick={this.Edit.bind(null, this.props.el.id)} />
                </td>
                <td>
                    <input type="button" value="удалить" onClick={this.Delete.bind(null, this.props.el.id)} />
                </td>
            </tr >
        );
    }
};

