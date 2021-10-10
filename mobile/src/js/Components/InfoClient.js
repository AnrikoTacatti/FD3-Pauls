
import React from 'react';
import '../css/style.css';


export default class EditProductEl extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render Info Clients");
        console.log(this.props.product.id);
        return (
            <div>
                <h1>Info Clients</h1>
                <div> name {this.props.product.name} </div>
                <div> surname {this.props.product.surname}  </div>
                <div> patronymic {this.props.product.patronymic}  </div>
                <div> quality {this.props.product.balans} </div>
                <div> quality {this.props.product.status} </div>
            </div>
        );
    }
};

