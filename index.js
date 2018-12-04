
import React from "react";
import ReactDOM from "react-dom";

import './main.css';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonClick = (e) => {
    console.log('click Event', e);
  }

  render() {
    return (<div className="button__component" onClick={this.onButtonClick}>This is a button</div>);
  }
}

const Index = () => {
  return <div>Hello React!<ButtonComponent/></div>;
};

ReactDOM.render(<Index />, document.getElementById("react-root"))