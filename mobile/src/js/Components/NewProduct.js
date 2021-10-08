
import React from 'react';
import '../css/style.css';
/*
class NewProductEl extends React.Component

constructor(props) {
    super(props);
}*/
export default function NewProductEl(props) {



    let inputNameRef = null;
    let InputPiceRef = null;
    let InputSurnameRef = null;
    let InputPatronymicRef = null;
    let InputBalansRef = null;
    let InputStatusRef = null;

    let setInputNameRef = (ref) => {
        inputNameRef = ref;
    }
    let setInputSurnameRef = (ref) => {
        InputSurnameRef = ref;
    }
    let setInputPatronymicRef = (ref) => {
        InputPatronymicRef = ref;
    }
    let setInputBalansRef = (ref) => {
        InputBalansRef = ref;
    }
    let setInputStatusRef = (ref) => {
        InputStatusRef = ref;
    }


    function NewProduct(e) {
        debugger;
        if (inputNameRef) {
            props.fbEditfield("name", inputNameRef.value);
        }
        if (InputBalansRef) {
            props.fbEditfield("balans", InputBalansRef.value);
        }

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

        if (!reqired) {
            if (!product.id) product.id = props.newproductid;
            props.setProduct((prevState) => {
                debugger;
                let newprevState = [...prevState];
                newprevState[newprevState.length] = product;
                return prevState = newprevState;
            });
            props.newproduct = {};
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
            <h1>New Client</h1>
            <div><label> name </label>   <input type="text" key={props.newproductnumber} ref={setInputNameRef} /> </div>
            <div><label> surname </label>  <input type="text" key={props.newproductnumber} ref={setInputSurnameRef} />  </div>
            <div><label> patronymic </label>  <input type="text" key={props.newproductnumber} ref={setInputPatronymicRef} /> </div>
            <div><label> balans </label> <input type="text" key={props.newproductnumber} ref={setInputBalansRef} /> </div>
            <div><label> status </label> <input type="text" key={props.newproductnumber} ref={setInputStatusRef} /> </div>
            <div>
                <input type="button" value="New Product" onClick={NewProduct} />
                <input type="button" value="Censel" onClick={props.fbCensel} />
            </div>

        </div>
    );
};


