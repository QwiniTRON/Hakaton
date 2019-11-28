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
            <div className="product">
                  <div className="content">
                  <div className="blockPhoto">
                    <div className="mainPhoto">
                        <img src={image} alt="Main" />
                    </div>
                    <div className="blockPhoto__smallPhotos">
                        <div className="blockPhoto__smallPhoto"><img src={image} /></div>
                        <div className="blockPhoto__smallPhoto"><img src={image} /></div>
                        <div className="blockPhoto__smallPhoto"><img src={image} /></div>
                    </div>
                </div>
    <article className="content__article" id="mainArticle">
        <h3>120 000 рублей в долларах</h3>
    <p id="Mark">Какая-то марка машины <br />
        New car
    </p>

        <input type="number" name="counter" />
        <button className="bu1" name="B1" value="#">
                В корзину
                </button>

    </article>
                  </div>
                
            </div>
            <Footer />
        </div>
        );
    }
}