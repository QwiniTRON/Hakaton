import React from 'react';
import "./paginator.css";

export default class Paginator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let data = this.props.data;

        let linkactive = (<div className="paginator__link_active" onClick={data.handLinkClick}>{data.activePage}</div>);
        let leftLink = data.activePage>1?(<div onClick={data.handLinkClick} className="paginator__link">{data.activePage-1}</div>) : "";
        let rightLink = data.pageCount > data.activePage? (<div onClick={data.handLinkClick} className="paginator__link">{+data.activePage+1}</div>) : "";

        return(
            <div className="paginator">
                <div className="paginator__maxprev" onClick={data.handMaxPevClick}>
                    &#60;&#60;
                </div>
                <div className="paginator__prev" onClick={data.handPevClick}>
                    &#60;
                </div>
                {leftLink}
                {linkactive}
                {rightLink}
                <div className="paginator__next" onClick={data.handNextClick}>
                    &#62;
                </div>
                <div className="paginator__maxnext" onClick={data.handMaxNextClick}>
                    &#62;&#62;
                </div>
            </div>
        );
    }
}













