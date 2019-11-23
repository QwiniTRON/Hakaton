import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../layouts/header/Header.js";
import "./main.css";
import Footer from "../../layouts/footer/Footer";
import Itemlist from "../../layouts/itemList/Itemlist";

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="main">
                <Header/>
                <div className="content">
                    <div className="content__title">Main catalog</div>
                    <Itemlist />
                </div>
                <Footer />
            </div>
        );
    }
}



