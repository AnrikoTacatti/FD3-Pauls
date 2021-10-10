
import React from 'react';
import '../css/style.css';
import { voteEvents } from '../events';
export default class EditProductEl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            inputNameRef: null,
            InputSurnameRef: null,
            InputPatronymicRef: null,
            InputBalansRef: null,
            InputStatusRef: null
        }

        this.EditProduct = this.EditProduct.bind(this);
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



    EditProduct(index, oldproduct, e) {
        e.stopPropagation();
        let newproduct = {};
        newproduct.name = this.inputNameRef.value;
        newproduct.surname = this.InputSurnameRef.value;
        newproduct.patronymic = this.InputPatronymicRef.value;
        newproduct.balans = this.InputBalansRef.value;
        newproduct.status = this.InputStatusRef.value;
        let product = { ...oldproduct, ...newproduct };
        voteEvents.emit('EsetEditProduct', product, index);

    }

    Censel() {
        voteEvents.emit('ECensel');
    }

    render() {
        console.log("renter EditClients");
        console.log(this.props.editid);
        return (
            <div>
                <h1>Edit Clients </h1>
                <div><label>surname</label>  <input type="text" defaultValue={this.props.strclientsedit.surname} key={this.props.editid} ref={this.setInputSurnameRef} />  {this.props.filderror["surname"] && <p > Please, fill the field.Value must be a number.</p>}</div>
                <div><label>name </label>   <input type="text" defaultValue={this.props.strclientsedit.name} key={this.props.editid} ref={this.setInputNameRef} /> {this.props.filderror["name"] && <p > Please, fill the field.Value must be a string.</p>}</div>
                <div><label>patronymic  </label>  <input type="text" defaultValue={this.props.strclientsedit.patronymic} key={this.props.editid} ref={this.setInputPatronymicRef} /> {this.props.filderror["patronymic"] && <p > Please, fill the field.</p>}</div>
                <div><label>balans </label> <input type="text" defaultValue={this.props.strclientsedit.balans} key={this.props.editid} ref={this.setInputBalansRef} /> {this.props.filderror["balans"] && <p > Please, fill the field.Value must be a number.</p>}</div>
                <div><label>status </label> <input type="text" defaultValue={this.props.strclientsedit.status} key={this.props.editid} ref={this.setInputStatusRef} /> {this.props.filderror["status"] && <p > Please, fill the field.Value must be a number.</p>}</div>

                <div>
                    <input type="button" value="Edit Product" onClick={this.EditProduct.bind(null, this.props.editid, this.props.strclientsedit)} disabled={Object.values(this.props.filderror).indexOf(true) !== -1} />
                    <input type="button" value="Censel" onClick={this.Censel} />
                </div>

            </div>
        );
    }
};