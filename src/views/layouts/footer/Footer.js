import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import "./footer.css";

export default class Footer extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="footer">
            <div>Наш телефон: 8852587845</div>
            <div>Наш адрес: Улица маркса 98, дом 8</div>
        </div>
      );
    }
}




















