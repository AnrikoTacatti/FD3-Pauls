"use strict";
import React from 'react';




export default class AboutPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log("NoMatch");
        return (
            <div className='NoMatch'>
               <h1>404</h1>
               <p><strong>There isn't  pages site here.</strong></p>
            </div>
        )
    }


}


