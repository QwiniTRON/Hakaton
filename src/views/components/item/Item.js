import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import logo from "./defaultItem.jpg";
import "./item.css";

export default class Item extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="item">
            <Link to={"/product/" + this.props.item.id}>
                <div className="item__title">{this.props.item.title}</div>
                <div className="item__imageFolder"><img className="item__image" src={logo} /></div>
                <div className="item__description">{this.props.item.description}</div>
            </Link>
        </div>
      );
    }
}



