import React from 'react';
import { NavLink } from 'react-router-dom';
import { icoHome, icoAbout } from '../ico/ico.js';

class MenuPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li><NavLink to="/FD3-Pauls/keep/public/" exact className="PageLink" activeClassName="ActivePageLink"> {icoHome()} Главная </NavLink></li>
                <li> <NavLink to="/FD3-Pauls/keep/public/about" className="PageLink" activeClassName="ActivePageLink"> {icoAbout()} О компании</NavLink></li>
            </React.Fragment>
        );
    }
}

export default MenuPage;




