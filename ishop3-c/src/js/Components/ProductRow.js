
import React from 'react';
import ReactDOM from 'react-dom';
export default function ProductRow(props) {
    return (
        <tr onClick={props.fbSelected.bind(null, props.id)} className={props.select ? "select" : null}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><img src={props.src} alt={props.name} /></td>
            <td>{props.quality}</td>
            <td><input type="button" value="удалить" onClick={props.fbDelete.bind(null, props.id)} /></td>
        </tr>
    );
};

