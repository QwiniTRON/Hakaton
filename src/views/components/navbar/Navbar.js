import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="navbar">
            <Link className="navbar__item" to="/cart">Корзина</Link>
            <Link className="navbar__item" to="/profile">Профиль</Link>
        </div>
      );
    }
}



