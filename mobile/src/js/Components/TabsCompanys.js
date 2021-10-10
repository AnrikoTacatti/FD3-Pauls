
import React from 'react';
import ClientsList from './ClientsList.js';
import '../css/style.css';
const mtsClients = require('../data/mts.json');
const veclonClients = require('../data/velcom.json');

const tableName = "Таблица ";
const tableColName = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Отчество",
    balans: "Баланс",
    status: "Статус"
};

export default class TabsCompanys extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            company: veclonClients,
            companykey: "velcom"

        }
        this.setCompany = this.setCompany.bind(this);
    }


    setCompany(data) {
        debugger;
        switch (data) {
            case "velcom":
                this.setState({ company: veclonClients });
                this.setState({ companykey: data });
                break;
            case "mts":
                this.setState({ company: mtsClients });
                this.setState({ companykey: data });
                break;
            default:
                console.log("Sorry, we are out of " + data + ".");
        }
    }


    render() {
        console.log("render TabsCompanys");
        return (
            <div>
                <input type="button" value="Velcom" onClick={this.setCompany.bind(null, "velcom")} />
                <input type="button" value="MTS" onClick={this.setCompany.bind(null, "mts")} />
                <ClientsList key={this.state.companykey} name={tableName} colname={tableColName} clients={this.state.company} />
            </div>
        );
    }
};

