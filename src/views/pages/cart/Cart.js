import React from 'react';
import logo from './default.jpg';
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import './cart.css';


class CartItem extends React.Component{
  constructor(props){
    super(props);
  }


}


export default class Cart extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
      return (
        <div className="main">
            <Header />
            <div className="content">
            <div className="parent">
            <div className="childOne">
                <div className="items">
                    <div className="item">
                        <div className="item__image"><img src={logo} alt="cart item" /></div>
                        <div className="item__description">
                            <div className="description__item_title">Lamborginy</div>
                            <div className="descall">
                            <div className="description__item_desc">Размер: <span className="text">L</span></div>
                            <div className="description__item_desc">Цвет: <span className="text">Ораньжевый</span></div>
                            <div className="description__item_desc">Каталог: <span className="text">Суперкары</span></div>
                            <div className="description__item_desc">Индетификатор товара: <span className="text">D133</span></div>
                            <div className="description__item_desc">Колличество: <span className="text">1 шт.</span></div>
                            <div className="description__item_price"><span className="text">2 000 000 руб.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
        </div>
       </div>
       <div className="childTwo">
                <div className="pricer">
                    <div className="pricer__price">Сумма</div>
                    <div className="pricer__content">
                    <div className="pricer__title">Промежуточный итог:<span className="pricer__value">33 550 000</span></div>
                    <div className="pricer__title">Налоги:<span className="pricer__value">0</span></div>
                    <div className="pricer__title">Доставка:<span className="pricer__value"></span></div>
                    <div className="pricer__title_itog">Итог:<span className="pricer__value">33 550 000</span></div>
                    </div>
                    <button className="pricer__submit">Оплатить</button>
                </div>
          </div>
     </div>
    </div>
            
            <Footer />
    </div>
        
      );
    }
  }











