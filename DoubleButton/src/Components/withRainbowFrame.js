import React from 'react';
import RainbowFrame from './RainbowFrame.js';

export default function withRainbowFrame(colors) {
    return function FramedDoubleButtonfinction(Db) {
        debugger;
        return (props) => (
            <React.Fragment>
                <RainbowFrame colors={colors}>  {props.children} </RainbowFrame>
                <br />
                <br />
                <Db caption1={props.caption1} caption2={props.caption2} cbPressed={props.cbPressed}>
                    {props.children}
                </Db>
            </React.Fragment>
        )
    }
}
