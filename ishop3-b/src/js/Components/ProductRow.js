
import React from 'react';
import '../css/style.css';
export default function ProductRow(props) {

    function Edit(index, e) {
        debugger;
        e.stopPropagation();
        props.setSelectid(null);
        props.setEditid(index);
        props.setNew(null);
        props.setfildError({ name: null, price: null, src: null, quality: null });
    }
    function Delete(productid, e) {
        e.stopPropagation();
        props.setEditid(null);
        debugger;
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            props.fbDelete(productid);
        }
    }
    function Selected(productid, e) {
        debugger;
        if (Object.keys(props.newproduct).length > 0) return false;
        if (props.selectid === productid) {
            props.setSelectid(null);

        }
        else {
            props.setSelectid(productid);

        }

    }


    return (
        <tr onClick={Selected.bind(null, props.index)} className={props.select ? "select" : null} >
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><img src={props.src} alt={props.name} /></td>
            <td>{props.quality}</td>
            <td>
                <input type="button" value="редактировать" onClick={Edit.bind(null, props.index)} disabled={Object.keys(props.newproduct).length > 0 && props.index != props.editid} />
                <input type="button" value="удалить" onClick={Delete.bind(null, props.id)} disabled={Object.keys(props.newproduct).length > 0} />
            </td>
        </tr>
    );
};

