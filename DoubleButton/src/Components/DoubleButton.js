import React from 'react';
export default class DoubleButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>  <input type="button" value={this.props.caption1} onClick={this.props.cbPressed.bind(null, 1)} />  <p>{this.props.children}</p>  <input type="button" value={this.props.caption2} onClick={this.props.cbPressed.bind(null, 2)} />     </div>
        )
    }

}