import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import Itemfull from "../../components/itemFull/Itemfull";
import "./cart.css";

export default class Cart extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="main">
            <Header />
                <div className="content">
                  <div className="orders">
                    <Itemfull price={1500} data={[{name: "Модель", value: "septima"}, {name: "Цвет", value: "Чёрный"}, {name: "Количество", value: "1"}, {name: "Категроия", value: "Электро, бас"},]} />
                    <Itemfull price={2000} data={[{name: "Модель", value: "Спарта"}, {name: "Цвет", value: "Белый"}, {name: "Количество", value: "1"}, {name: "Категроия", value: "Электро, бас"},]} />
                    <Itemfull price={9800} data={[{name: "Модель", value: "Муза"}, {name: "Цвет", value: "Жёлтый"}, {name: "Количество", value: "1"}, {name: "Категроия", value: "классическая"},]} />
                  </div>
                </div>
            <Footer />
        </div>
      );
    }
}