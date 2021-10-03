"use strict";
import React from 'react';
import PropTypes from 'prop-types';

export default class RainbowFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {
        debugger;
        let colorRainbow;

        this.props.colors.forEach((el, index) => {
            console.log(this);
            colorRainbow = <div class="color-frame" style={{ border: "solid 10px " + el, padding: "10px" }}>
                {index === 0 ? this.props.children : colorRainbow}
            </div>
        });
        return colorRainbow;

    }

}