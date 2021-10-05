import React from 'react';

export default function withRainbowFrame(colors) {
    return function FramedDoubleButtonfinction(Db) {
        debugger;
        return (props) => {
            let colorRainbow;
            <React.Fragment>
                {
                    colors.forEach((el, index) => {
                        return colorRainbow = <div className="color-frame" style={{ border: "solid 10px " + el, padding: "10px" }}>
                            {index === 0 ? <Db caption1={props.caption1} caption2={props.caption2} cbPressed={props.cbPressed}>{props.children}</Db> : colorRainbow}
                        </div>
                    })


                }
            </React.Fragment>
            return colorRainbow;
        }
    }
}
