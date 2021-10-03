
"use strict";
import React from 'react';
import ReactDOM from 'react-dom'; /* для работы с веб страницами */  // модуль React для работы с веб-страницами  import {render} from 'react-dom';
import DoubleButton from './Components/DoubleButton.js';
import withRainbowFrame from './Components/withRainbowFrame.js';

/*class DoubleButton extends React.Component {
    constructor(props) {
      super(props);
    }
      render(){
      return ( <div>  <input type="button" value={this.props.caption1} onClick={this.props.cbPressed.bind(null,1)} />  <p>{this.props.children}</p>  <input type="button" value={this.props.caption2}  onClick={this.props.cbPressed.bind(null,2)} />     </div>
      ) 
  }
      
      }
  
   class RainbowFrame extends React.Component {
    constructor(props) {
      super(props);
    }
  
    static propTypes = {
      colors: PropTypes.array.isRequired,
    };
  
    render() {
      debugger;
      let colorRainbow;
  
     this.props.colors.forEach( (el, index) => {
        console.log(this);
          colorRainbow =  <div class="color-frame" style={{border:"solid 10px "+ el ,padding:"10px"}}>
            { index === 0 ? this.props.children : colorRainbow}
        </div>
      });
      return colorRainbow;
      
    }
  
  }
  
  function  withRainbowFrame(colors){
      return function  FramedDoubleButtonfinction (Db){   
       debugger;
      return  (props) => (  
  <>
       <RainbowFrame colors={colors}>  { props.children} </RainbowFrame>
       <br/>
       <br/>
      <Db caption1={props.caption1} caption2={props.caption2} cbPressed={props.cbPressed}>
          { props.children}
      </Db>
      </>
     )
    }
  }
  */

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

class App extends React.Component {


    render() {


        return (
            <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>вышел, был сильный</FramedDoubleButton>
        );


    }

}


ReactDOM.render(<App />, document.getElementById('root'));