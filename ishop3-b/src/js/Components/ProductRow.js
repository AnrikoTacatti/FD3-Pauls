
import React from 'react';
import '../css/style.css';
export default function ProductRow(props) {
    return (
        <tr onClick={props.fbSelected.bind(null, props.index)} className={props.select ? "select" : null}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><img src={props.src} alt={props.name} /></td>
            <td>{props.quality}</td>
            <td>
                <input type="button" value="редактировать" onClick={props.fbEdit.bind(null, props.index)} disabled={Object.keys(props.newproduct).length > 0 && props.index != props.editid} />
                <input type="button" value="удалить" onClick={props.fbDelete.bind(null, props.id)} disabled={Object.keys(props.newproduct).length > 0} />
            </td>
        </tr>
    );
};

