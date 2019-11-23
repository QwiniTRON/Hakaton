import React from 'react';
import ReactDOM from 'react-dom';
import Item from "../../components/item/Item";
import "./itemlist.css";

export default class Itemlist extends React.Component{
    constructor(props){
      super(props);
        
      this.state = {
          itemCount: 9
      };
    }
  
    render(){
    
        let items = [];
        for(let i =0; i<this.state.itemCount; i++){
            items.push(<Item key={i} item={{id: i, title: "Товар" + i, description: "Описание" + i}} />);
        }

      return (
        <div className="itemList">
            {items}
        </div>
      );
    }
}