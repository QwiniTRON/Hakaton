import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../../components/navbar/Navbar";
import logo from "./defaultLogo.png";
import "./header.css";
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    constructor(props){
      super(props);
      
      this.handleSearchClick = this.handleSearchClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        search: "",
      };
    }
  
    handleChange(event){
      let name = event.target.name;
      let value = event.target.value;

      this.setState({
        [name]: value
      });
    }

    handleSearchClick(){
      if(this.state.search !== ""){
        window.location = "/1/"+this.state.search;
      }
    }

    render(){
      return (
        <div className="header">
            <Link to="/"><div className="header__logo"><img src={logo}/></div></Link>
            <div className="search">
              <input onChange={this.handleChange} value={this.state.search} type="text" className="search__text" name="search" />
              <button onClick={this.handleSearchClick} className="search__do">Поиск!</button>
            </div>
            <Navbar />
        </div>
      );
    }
}
