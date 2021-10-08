
import React from 'react';
import '../css/style.css';


export default function EditProductEl(props) {
    debugger;
    return (
        <div>
            <h1>Info Product</h1>
            <div> name    {props.product.name} </div>
            <div> price   {props.product.price}  </div>
            <div> src     {props.product.src}  </div>
            <div> quality {props.product.quality} </div>
        </div>
    );
};