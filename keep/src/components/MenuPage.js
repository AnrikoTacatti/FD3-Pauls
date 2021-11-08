import React from 'react';
import { NavLink } from 'react-router-dom';

class MenuPage extends React.Component {
    homeIco = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home-lg-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V368a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.28l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z" ></path></svg>;
    aboutIco = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z" ></path></svg>;

    render() {
        return (
            <React.Fragment>
                <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink"> {this.homeIco()} Главная </NavLink></li>
                <li> <NavLink to="/about" className="PageLink" activeClassName="ActivePageLink"> {this.aboutIco()} О компании</NavLink></li>
            </React.Fragment>
        );
    }
}

export default MenuPage;




