import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../layouts/header/Header.js";
import "./main.css";
import Footer from "../../layouts/footer/Footer";
import Itemlist from "../../layouts/itemList/Itemlist";
import ItemListSort from "../../layouts/itemlistSort/ItemListSort";

class Sidebar extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isOpen: false
          }
    }

    handleClick(){
        this.setState({isOpen: !this.state.isOpen});
      }

    render(){
        let opener = this.state.isOpen? "" : " hide";

        return(
            <div className={"sidebar" + opener}>
                <div onClick={this.handleClick} className="sidebar__opener">I Фильтры I</div>
                        <div className="sidebar__content">
                            <div className="sidebar__categoryes">
                                <div className="sidebar__category">Басухи</div>
                                <div className="sidebar__category">Электро</div>
                                <div className="sidebar__category">Акустические</div>
                                <div className="sidebar__category">Классические</div>
                            </div>
                            <div className="sidebar__filters">
                            <div className="sidebar__priceFilter">
                              <div className="sidebar__min"><span>от</span> <input className="sidebar__minPrice" name="min" type="text" /></div>
                              <div className="sidebar__max"><span>до</span> <input name="max" className="sidebar__maxPrice" type="text" /></div>
                            </div>
                            <button className="sidebar__doFilters">Применить!</button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="main">
                <Header/>
                <div className="content">
                    <Sidebar></Sidebar>
                    <ItemListSort search={this.props.match.params.search} page={this.props.match.params.page} />
                </div>
                <Footer />
            </div>
        );
    }
}



