import React, { Component } from 'react'
import './login-form.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange (event) {
        this.setState({[event.target.id]: event.target.value});
    }

    doLogin()   {
        const { email , password } = this.state;
        if(email === "carlos@gmail.com" && password === "123"){
            window.localStorage.setItem('user',JSON.stringify({username:'Carlos Jose'}));
            this.props.router.history.push('/dashboard')
        } 
    }

    handleSubmit(event){
        event.preventDefault();

        if(this.validateForm()){
            this.doLogin();
        }
    }

    render() {
        return (
            <form className="col-md-2 col-lg-2 col-sm-2" onSubmit={this.handleSubmit}>
                <div className="form-group ">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="email"  placeholder="Enter email" value={this.state.email} onChange={this.handleChange} ></input>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} ></input>
                </div>
                <button type="submit" className="btn btn-primary"> Submit</button>
            </form>
        )
    }
}