import React from 'react';
import "./itemListSort.css";
import Itemlist from "../itemList/Itemlist";
import Paginator from "../../components/paginator/Paginator";


export default class itemListSort extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handPevClick = this.handPevClick.bind(this);
        this.handNextClick = this.handNextClick.bind(this);
        this.handLinkClick = this.handLinkClick.bind(this);
        this.handMaxPevClick = this.handMaxPevClick.bind(this);
        this.handMaxNextClick = this.handMaxNextClick.bind(this);

        this.state ={
            filter: "pricemax",
            search: "",
            pageCount: 4,
            activePage: 1,
        };

        if(props.search && props.search !== ""){
            this.state.search = props.search;
        }

        if(props.page <= this.state.pageCount && props.page>= 1){
            this.state.activePage = props.page;
        }
    }

    handleChange(event){
        this.setState({
            filter: event.target.value
        });
    }
  
    handPevClick(event){
        if(this.state.activePage > 1){
            this.setState({
                activePage: this.state.activePage-1,
            });
        }
    }

    handLinkClick(event){
        let page = +event.target.textContent;
        if(!isNaN(page)){
            this.setState({
                activePage: page,
            });
        }
    }

    handMaxPevClick(event){
        this.setState({
            activePage: 1,
        });
    }

    handMaxNextClick(event){
        this.setState({
            activePage: this.state.pageCount,
        });
    }

    handNextClick(event){
        if(this.state.pageCount > this.state.activePage){
            this.setState({
                activePage: this.state.activePage+1,
            });
        }
    }

    render(){
        let dataPaginator = {
            pageCount: this.state.pageCount,
            activePage: this.state.activePage,
            handPevClick: this.handPevClick,
            handLinkClick: this.handLinkClick,
            handMaxPevClick: this.handMaxPevClick,
            handMaxNextClick: this.handMaxNextClick,
            handNextClick: this.handNextClick,
        };

        console.log(this);
        

      return (
        <div className="itemListSort">
            <div className="itemListSort__filter">
                <select name="filter" value={this.state.filter} onChange={this.handleChange}>
                    <option value="pricemax">По-убыванию</option>
                    <option value="pricemin">По-Возрастанию</option>
                    <option value="popular">По-популярности</option>
                </select>
            </div>
            <Itemlist />
            <Paginator data={dataPaginator} />
        </div>
      );
    }
}



