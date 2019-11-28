import React from 'react';
import "./loger.css";
import Modal from "../modal/Modal";
import LoginForm from "../loginForm/LoginForm";
import RegistrForm from "../RegistrForm/RegistrForm";

export default class Logger extends React.Component{
    constructor(props){
      super(props);
      this.handleClickReg = this.handleClickReg.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        isModal: false,
        isLoginForm: true,
        isLogin: false,
      }
    }
  
    handleClick(){
      this.setState({isModal: !this.state.isModal, isLoginForm: true});
    }

    handleClickReg(){
        this.setState({isLoginForm: !this.state.isLoginForm});
    }
    
    render(){
      let form = this.state.isLoginForm? <LoginForm   onClickCLose={this.handleClickReg} />: <RegistrForm onClickCLose={this.handleClickReg} /> ;
  
      return(
        <React.Fragment>
          <div onClick={this.handleClick} className="navbar__item">Войти</div>
          {this.state.isModal && <Modal onClickClose={this.handleClick}>{form}</Modal>}
        </React.Fragment>
      );
    }
  
  }