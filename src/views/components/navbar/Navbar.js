import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import "./Navbar.css";
import Modal from "../modal/Modal";
import Logger from "../logger/Logger";

export default class Navbar extends React.Component{
    constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);

      this.state = {
        isOpen: false, 
        
      }
    }
  
    handleClick(){
      this.setState({isOpen: !this.state.isOpen});
    }


    render(){
      let opener = this.state.isOpen? "" : " hide";

      return (
        <div className={"navbar" + opener}>
          <div onClick={this.handleClick} className="navbar__opener">I Навигация I</div>
          <div className="navbar__content">
            <Link className="navbar__item" to="/favorites">Избранное</Link>
            <Link className="navbar__item" to="/profile">Профиль</Link>
            <Link className="navbar__item" to="/orders">Заказы</Link>
            <Link className="navbar__item" to="/cart">Корзина</Link>
            <Logger></Logger>
          </div>
        </div>
      );
    }
}



