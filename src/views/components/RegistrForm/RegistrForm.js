import React from 'react';
import c from "./registrForm.module.css";

export default class RegistrForm extends React.Component{
    constructor(props){
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        adress: "",
        log: "",
        pas: "",
        tpas: "",
        fio: "",
        errorObj: {},
      }
    }
  
    handleSubmit(event){
      event.preventDefault();

      let errorCount = 0;
      let tempObj = {};

      if(this.state.adress == ""){
        tempObj["adress"] = "Введите адрес пожалуйста!!!";
        errorCount++;
      }
      if(this.state.log == ""){
        tempObj["log"] = "Введите логин пожалуйста!!!";
        errorCount++;
      }
      if(this.state.pas == ""){
        tempObj["pas"] = "Введите пароль пожалуйста!!!";
        errorCount++;
      }
      if(this.state.tpas == ""){
        tempObj["tpas"] = "Повторите пароль пожалуйста!!!";
        errorCount++;
      }
      if(this.state.tpas !== this.state.pas && this.state.tpas!== ""){
        tempObj["tpas"] = "Пфроли не совпадают!!!";
        errorCount++;
      }
      if(this.state.fio == ""){
        tempObj["fio"] = "Введите ФИО пожалуйста!!!";
        errorCount++;
      }


      if(!errorCount){
        alert("Делаем запрос!");
      }else{
        this.setState({
          errorObj: tempObj
        });
      }
      
    }
  
    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render(){
      console.log(c);
      
      
      return(
        <div className="RegistrForm">
          <form className={c.RegistrForm} onSubmit={this.handleSubmit}>
          {this.state.errorObj["adress"] && <div className={c.correct}>{this.state.errorObj["adress"]}</div>}
          <div className={c.RegistrForm__inputBlock}>
              <input className={c.tinput} onChange={this.handleChange} value={this.state.adress} type="text" name="adress" />
              <p className={c.input__inside}>Ваш адрес</p>
          </div>
          {this.state.errorObj["log"] && <div className={c.correct}>{this.state.errorObj["log"]}</div>}
          <div className={c.RegistrForm__inputBlock}>
              <input className={c.tinput} onChange={this.handleChange} value={this.state.log} type="text" name="log" />
              <p className={c.input__inside}>Ваш логин</p>
          </div>
          {this.state.errorObj["pas"] && <div className={c.correct}>{this.state.errorObj["pas"]}</div>}
          <div className={c.RegistrForm__inputBlock}>
              <input className={c.tinput} onChange={this.handleChange} value={this.state.pas} type="password" name="pas" />
              <p className={c.input__inside}>Ваш Пароль</p>
          </div>
          {this.state.errorObj["tpas"] && <div className={c.correct}>{this.state.errorObj["tpas"]}</div>}
          <div className={c.RegistrForm__inputBlock}>
              <input className={c.tinput} onChange={this.handleChange} value={this.state.tpas} type="password" name="tpas" />
              <p className={c.input__inside}>Повторите пароль</p>
          </div>
          {this.state.errorObj["fio"] && <div className={c.correct}>{this.state.errorObj["fio"]}</div>}
          <div className={c.RegistrForm__inputBlock}>
              <input className={c.tinput} onChange={this.handleChange} value={this.state.fio} type="text" name="fio" />
              <p className={c.input__inside}>Ваше ФИО</p>
          </div>
          <div className={c.RegistrForm__submit}>
              <input className={c.RegistrForm__doSubmit} type="submit" name="sub" value="Зарегистрироваться!" />
          </div>
          <div className={c.RegistrForm__log}>
              <button className={c.RegistrForm__doLog} onClick={this.props.onClickCLose}>залогиниться</button>
          </div>
        </form>
        </div>
      );
    }
  }


