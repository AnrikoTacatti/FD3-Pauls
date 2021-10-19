"use strict";
import React from 'react';




export default class AboutPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log("AboutPage");
        return (
            <div className='AboutPage'>
                <h2> Almost Google Tasks </h2>
                <p>This application is written based on <a href='https://developers.google.com/google-apps/tasks/'>
                    Google Tasks API</a> using Material Design concepts.</p>
                <p>It is a final result of ReactJS Essential Course.</p>
            </div>
        )
    }


}


