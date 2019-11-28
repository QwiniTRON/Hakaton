import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import c from  "./profile.module.css";
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
                    <div className={c.proflie}>
                      <div className={c.childOne}>
                          <img src={logo} />
                      </div>
                      <div className={c.childTwo}>
                          <div className={c.content}>
                              Никнейм: <span className={c.content__span}>QwiniTRON</span>
                              <button>Изменить</button>
                          </div>
                          <div className={c.content}>
                              Почтовый ящик: <span className={c.content__span}>zazro@mail.ru</span>
                              <button>Изменить</button>
                          </div>
                          <div className={c.content}>
                              Пароль: <span className={c.content__span}>******</span>
                              <button>Изменить</button>
                          </div>
                          <div className={c.content}>
                              Адрес: <span className={c.content__span}>Россия, Челябинск, Савина 18</span>
                              <button>Изменить</button>
                          </div>
                      </div>
                  </div>
                </div>
            <Footer />
       </div>
    );
  }
}