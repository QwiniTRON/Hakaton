import React from 'react';
import ReactDOM from 'react-dom';
import image from "./default.jpg";
import "./itemfull.css";

export default class Itemfull extends React.Component{
    constructor(props){
      super(props);
  
    }
  
    render(){
        let data = this.props.data.map((elem, index)=>{
        return <div key={elem.name + elem.value} className="itemfull__point"><span className="itemfull__aspect">{elem.name}</span>: {elem.value}</div>
        });

      return (
        <div className="itemfull">
            <div className="itemfull__img"><img src={image} /></div>
            <div className="itemfull__description">
                {data}
            </div>
            <div className="itemfull__buyblock">
                <div className="itemfull__price">{this.props.price}</div>
                <button className="itemfull__buy">Подтвердить получение</button>
            </div>
        </div>
      );
    }
}















