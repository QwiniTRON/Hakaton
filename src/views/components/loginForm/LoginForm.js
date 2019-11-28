import React from 'react';
import "./loginForm.css";

export default class LoginForm extends React.Component{
    constructor(props){
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
         pas: "",
         log: "",
         errorObj: {}
      }
    }

    handleSubmit(event){
      event.preventDefault();

      let errorCount = 0;
      let tempObj = {};

      if(this.state.log == ""){
        tempObj["log"] = "Введите логин пожалуйста!!!";
        errorCount++;
      }
      if(this.state.pas == ""){
        tempObj["pas"] = "Введите пароль пожалуйста!!!";
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
      return(
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          {this.state.errorObj["log"] && <div className="correct">{this.state.errorObj["log"]}</div>}
          <div className="LoginForm__login">
              <input type="text" value={this.state.log} onChange={this.handleChange} name="log" />
              <p className="LoginForm__titleLog">Логин</p>
          </div>
          {this.state.errorObj["pas"] && <div className="correct">{this.state.errorObj["pas"]}</div>}
          <div className="LoginForm__password">
              <input type="password" value={this.state.pas} onChange={this.handleChange} name="pas" />
              <p className="LoginForm__titlePas">Пароль</p>
          </div>
          <div className="LoginForm__submit">
              <input type="submit" name="sub" value="Войти" />
          </div>
          <div className="LoginForm__registr">
              <button className="LoginForm__doReg" onClick={this.props.onClickCLose}>Зарегистрироваться</button>
          </div>
        </form>
      );
    }
}










