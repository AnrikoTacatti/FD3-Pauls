import React from 'react';
import { NavLink } from 'react-router-dom';
import { icoHome, icoAbout } from '../ico/ico.js';

class MenuPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink"> {icoHome()} Главная </NavLink></li>
                <li> <NavLink to="/about" className="PageLink" activeClassName="ActivePageLink"> {icoAbout()} О компании</NavLink></li>
            </React.Fragment>
        );
    }
}

export default MenuPage;




