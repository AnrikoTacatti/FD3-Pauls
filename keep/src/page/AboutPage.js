"use strict";
import React from 'react';

export default class AboutPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("AboutPage");
        return (
            <div className='AboutPage'>
                <h2> Almost Tasks </h2>
                <p>This application is written based on Firebase Realtime Database.</p>
                <p>It is a final result of ReactJS.</p>
            </div >
        )
    }
}


