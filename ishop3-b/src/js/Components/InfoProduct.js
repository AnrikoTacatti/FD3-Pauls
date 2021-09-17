
import React from 'react';
import '../css/style.css';


export default function EditProductEl(props) {
    debugger;
    return (
        <div>
            <h1>Info Product</h1>
            <div> name    {props.stproduct[props.selectid].name} </div>
            <div> price   {props.stproduct[props.selectid].price}  </div>
            <div> src     {props.stproduct[props.selectid].src}  </div>
            <div> quality {props.stproduct[props.selectid].quality} </div>
        </div>
    );
};