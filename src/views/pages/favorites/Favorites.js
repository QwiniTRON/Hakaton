import React from 'react';
import c from './styleF.module.css';
import Photo from "./Photo.jpg";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

class Favorites extends React.Component{
    render(){
      return (
        <div className="main">
            <Header />
            <div className="content">
            <div className={c.content}>
                <div className={c.unit1}>
                    <div className={c.hu1}><img src={Photo} /></div>
                     <div className={c.hu2}><p>Здесь описание и кнопка</p></div>
                </div>
                <div className={c.unit2}>
                    <div className={c.hu1}><img src={Photo} /></div>
                     <div className={c.hu2}><p>Здесь описание и кнопка</p></div>
                </div>
                <div className={c.unit3}>
                    <div className={c.hu1}><img src={Photo} /></div>
                     <div className={c.hu2}><p>Здесь описание и кнопка</p></div>
                </div>
                <div className={c.unit4}>
                    <div className={c.hu1}><img src={Photo} /></div>
                    <div className={c.hu2}><p>Здесь описание и кнопка</p></div>
                </div>
                <div className={c.unit4}>
                    <div className={c.hu1}><img src={Photo} /></div>
                    <div className={c.hu2}><p>Здесь описание и кнопка</p></div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
      );
    }
}


export default Favorites;