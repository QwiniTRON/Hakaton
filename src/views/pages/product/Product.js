import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import "./product.css";
import image from "./default.jpg";

export default class Product extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            counter: 1,
        };
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        if(value >= 1){
            this.setState({
                [name]: value
            });
        }
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

        <input value={this.state.counter} onChange={this.handleChange} type="number" name="counter" />
        <button className="bu1" name="B1" value="#">В корзину</button>
        <div className="product__favorite">Добавить в избранное</div>
    </article>
                    </div>
                
            </div>
            <Footer />
        </div>
        );
    }
}