import React from 'react';
import { NavLink } from 'react-router-dom';



class Pagination extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const pageNumber = []
        for (let i = 1; i <= Math.ceil(this.props.total / this.props.perpage); i++) {
            pageNumber.push(i);
        }
        console.log(this.props);
        return (
            <ul className="pagination">
                {pageNumber.map((number) => <li key={number}><NavLink to={this.props.url + "?page_" + number} onClick={this.props.pageNumber.bind(null, number)}>{number}</NavLink></li>)}
            </ul>
        );

    }

}


export default Pagination;




