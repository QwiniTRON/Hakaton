import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import "./product.css";
import image from "./default.jpg";

export default class Product extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      console.log(this);
      
      return (
        <div className="main">
            <Header />
            <div className="content">
              <div className="product">
                <div className="product__folder">
                    <div className="folder__main"><img src={image} /></div>
                    <div className="folder__small"><img src={image} /></div>
                    <div className="folder__small"><img src={image} /></div>
                    <div className="folder__small"><img src={image} /></div>
                </div>
                <div className="product__buyBlock">
                    <div className="buyBlock">
                        <div className="buyBlock__price">
                            500
                        </div>
                        <div className="buyBlock__title"> 
                          Супер гитара ямаха
                        </div>
                        <div className="categories"> 
                          <div className="categories__item">Бас</div>
                          <div className="categories__item">электро</div>
                        </div>
                        <div className="buyBlock__description">
                          Ну реально крутая гитара, ну реально.
                        </div>
                        <button className="buyBlock__submit">Добавить в корзину</button>
                    </div>
                </div>
              </div>
            </div>
            <Footer />
        </div>
      );
    }
}