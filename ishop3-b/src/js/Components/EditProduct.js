
import React from 'react';
import '../css/style.css';


export default function EditProductEl(props) {
    function EditProduct(index, oldproduct, e) {
        debugger;
        e.stopPropagation();
        let product = { ...oldproduct, ...props.newproduct };
        console.log(props.stproduct);
        props.setProduct((prevState) => {
            debugger;
            let newprevState = [...prevState];
            newprevState[index] = product;
            return prevState = newprevState;
        });
        props.setNewproduct({});
    }

    debugger;
    return (
        <div>
            <h1>Edit Product </h1>
            <div><label>name </label>   <input type="text" defaultValue={props.stproduct[props.editid].name} onBlur={props.fbEditfield.bind(null, "name")} key={props.editid} /> {props.filderror["name"] && <p > Please, fill the field.Value must be a string.</p>}</div>
            <div><label> price </label>  <input type="text" defaultValue={props.stproduct[props.editid].price} onBlur={props.fbEditfield.bind(null, "price")} key={props.editid} />  {props.filderror["price"] && <p > Please, fill the field.Value must be a number.</p>}</div>
            <div><label> src   </label>  <input type="text" defaultValue={props.stproduct[props.editid].src} onBlur={props.fbEditfield.bind(null, "src")} key={props.editid} /> {props.filderror["src"] && <p > Please, fill the field.</p>}</div>
            <div><label> quality </label> <input type="text" defaultValue={props.stproduct[props.editid].quality} onBlur={props.fbEditfield.bind(null, "quality")} key={props.editid} /> {props.filderror["quality"] && <p > Please, fill the field.Value must be a number.</p>}</div>
            <div>
                <input type="button" value="Edit Product" onClick={EditProduct.bind(null, props.editid, props.stproduct[props.editid])} disabled={Object.values(props.filderror).indexOf(true) !== -1} />
                <input type="button" value="Censel" onClick={props.fbCensel} />
            </div>

        </div>
    );
};