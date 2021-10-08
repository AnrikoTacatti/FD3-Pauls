
import React from 'react';
import '../css/style.css';
import { voteEvents } from '../events';

export default function NewProductEl(props) {

    let inputNameRef = null;
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


    function NewClient(e) {

        let newproduct = {};
        let reqired = true;
        let objerror = {};

        newproduct.id = props.newproductid;
        newproduct.name = inputNameRef.value;
        newproduct.surname = InputSurnameRef.value;
        newproduct.patronymic = InputPatronymicRef.value;
        newproduct.balans = InputBalansRef.value;
        newproduct.status = InputStatusRef.value;



        voteEvents.emit('EsetProduct', newproduct);



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
                <input type="button" value="New Client" onClick={NewClient} />
                <input type="button" value="Censel" onClick={props.fbCensel} />
            </div>

        </div>
    );
};


