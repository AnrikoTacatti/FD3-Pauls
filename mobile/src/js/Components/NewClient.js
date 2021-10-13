
import React from 'react';
import '../css/style.css';
import { voteEvents } from '../events';


export default class NewProductEl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            inputNameRef: null,
            InputSurnameRef: null,
            InputPatronymicRef: null,
            InputBalansRef: null,
            InputStatusRef: null

        }

        this.NewClient = this.NewClient.bind(this);
    }

    setInputNameRef = (ref) => {
        this.inputNameRef = ref;
    }
    setInputSurnameRef = (ref) => {
        this.InputSurnameRef = ref;
    }
    setInputPatronymicRef = (ref) => {
        this.InputPatronymicRef = ref;
    }
    setInputBalansRef = (ref) => {
        this.InputBalansRef = ref;
    }
    setInputStatusRef = (ref) => {
        this.InputStatusRef = ref;
    }


    NewClient(e) {

        let newproduct = {};
        console.log(this.props.newproductid);
        newproduct.id = this.props.newproductid;
        newproduct.name = this.inputNameRef.value;
        newproduct.surname = this.InputSurnameRef.value;
        newproduct.patronymic = this.InputPatronymicRef.value;
        newproduct.balans = this.InputBalansRef.value;
        newproduct.status = this.InputStatusRef.value;
        voteEvents.emit('EsetNewProduct', newproduct);

    }
    Censel() {
        voteEvents.emit('ECensel');
    }

    render() {
        console.log("render New Client");

        return (
            <div className="new-client">
                <h1>New Client</h1>
                <div><label> surname </label>  <input type="text" key={this.props.newproductnumber} ref={this.setInputSurnameRef} />  </div>
                <div><label> name </label>   <input type="text" key={this.props.newproductnumber} ref={this.setInputNameRef} /> </div>
                <div><label> patronymic </label>  <input type="text" key={this.props.newproductnumber} ref={this.setInputPatronymicRef} /> </div>
                <div><label> balans </label> <input type="text" key={this.props.newproductnumber} ref={this.setInputBalansRef} /> </div>
                <div><label> status </label> <input type="text" key={this.props.newproductnumber} ref={this.setInputStatusRef} /> </div>
                <div>
                    <input type="button" value="New Client" onClick={this.NewClient} />
                    <input type="button" value="Censel" onClick={this.Censel} />
                </div>

            </div >
        );
    }
};


