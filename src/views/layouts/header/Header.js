import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../../components/navbar/Navbar";
import logo from "./defaultLogo.png";
import "./header.css";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="header">
            <Link to="/"><div className="header__logo"><img src={logo}/></div></Link>
            <Navbar />
        </div>
      );
    }
}
