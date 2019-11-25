import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./profile.css";
import logo from "./default.jpg";

export default class Profile extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="main">
            <Header/>
                <div className="content">
                  <div className="userInfo">
                      <div className="userInfo__image"><img src={logo}/></div>
                      <div className="userInfo__properties">
                        <div className="userInfo__username"><div className="userInfo__value">Ваш ник: Qwini</div><button className="userInfo__edit">изменить!</button></div>
                        <div className="userInfo__login"><div className="userInfo__value">Ваш маил :zazaro@.gma-il.dom</div><button className="userInfo__edit">изменить!</button></div>
                        <div className="userInfo__password"><div className="userInfo__value">Ваш пароль: Есть</div><button className="userInfo__edit">изменить!</button></div>
                        <div className="userInfo__adress"><div className="userInfo__value">ваш Адресс: Россия, москва, сербская 9, кв 58</div><button className="userInfo__edit">изменить!</button></div>
                      </div>
                  </div>
                </div>
            <Footer />
       </div>
    );
  }
}