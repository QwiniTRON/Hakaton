import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css";

export default class Modal extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div className="modal">
          <div className="modal__block" onClick={this.props.onClickClose}>
          </div>
          <div className="modal__content">
             <button className="modal__closer" onClick={this.props.onClickClose}>x</button>
             {this.props.children}
          </div>
        </div>
      );
    }
}