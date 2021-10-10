
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
        debugger;
        e.stopPropagation();
        voteEvents.emit('EsetEditid', index);
    }

    Delete(productid, e) {
        e.stopPropagation();
        debugger;
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            voteEvents.emit('EDelete', productid);

        }
    }

    Selected(productid, e) {
        debugger;
        if (Object.keys(this.props.newproduct).length > 0) return false;
        if (this.props.selectid === productid) {
            voteEvents.emit('EsetSelectid', null);
        }
        else {
            voteEvents.emit('EsetSelectid', productid);

        }

    }

    render() {
        console.log("render ProductRow");
        return (
            <tr onClick={this.Selected.bind(null, this.props.index)} className={this.props.select ? "select" : null} >
                <td>{this.props.surname}</td>
                <td>{this.props.name}</td>
                <td>{this.props.patronymic}</td>
                <td>{this.props.balans}</td>
                <td className={this.props.status} >{this.props.status}</td>

                <td>
                    <input type="button" value="редактировать" onClick={this.Edit.bind(null, this.props.index)} />
                </td>
                <td>
                    <input type="button" value="удалить" onClick={this.Delete.bind(null, this.props.id)} />
                </td>
            </tr>
        );
    }
};

