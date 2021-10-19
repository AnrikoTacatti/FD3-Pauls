
import React from 'react';
import '../css/style.css';


export default function NewProductEl(props) {


    function NewProduct(e) {
        debugger;
        e.stopPropagation();
        let product = { ...props.newproduct };
        let reqired = true;
        let objerror = {};

        Object.keys(props.filderror).forEach(function (key) {
            if (props.filderror[key] !== false) {
                reqired = false;
                objerror[key] = true;
            }
        });

        if (reqired) {
            if (!product.id) product.id = props.newproductid;
            props.setProduct((prevState) => {
                debugger;
                let newprevState = [...prevState];
                newprevState[newprevState.length] = product;
                return prevState = newprevState;
            });
            props.setNewproduct({});
            props.setSelectid(props.newproductnumber);
        }
        else {
            props.setfildError((prevState) => {
                debugger;
                let newprevState = { ...props.filderror, ...objerror };
                return prevState = newprevState;
            });
        }
    }

    debugger;
    return (
        <div>
            <h1>New Product</h1>
            <div><label>name </label>   <input type="text" onBlur={props.fbEditfield.bind(null, "name")} key={props.newproductnumber} /> {props.filderror["name"] && <p > Please, fill the field.Value must be a string.</p>}</div>
            <div><label> price </label>  <input type="text" onBlur={props.fbEditfield.bind(null, "price")} key={props.newproductnumber} />  {props.filderror["price"] && <p > Please, fill the field.Value must be a number.</p>}</div>
            <div><label> src   </label>  <input type="text" onBlur={props.fbEditfield.bind(null, "src")} key={props.newproductnumber} /> {props.filderror["src"] && <p > Please, fill the field.</p>}</div>
            <div><label> quality </label> <input type="text" onBlur={props.fbEditfield.bind(null, "quality")} key={props.newproductnumber} /> {props.filderror["quality"] && <p > Please, fill the field.Value must be a number.</p>}</div>
            <div>
                <input type="button" value="New Product" onClick={NewProduct} disabled={Object.values(props.filderror).indexOf(true) !== -1} />
                <input type="button" value="Censel" onClick={props.fbCensel} />
            </div>

        </div>
    );
};


