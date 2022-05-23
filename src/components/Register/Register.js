import React, {Component} from 'react';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    // Updates the state whenever an user types on any field
    onRegisterInputsChange = () => {
        this.setState({
            username: document.getElementById('userRegisterInput').value,
            email: document.getElementById('emailRegisterInput').value,
            password: document.getElementById('passRegisterInput').value
        });
    }

    // Recognices when the user clicks on create account button
    onRegisterClick = () => {
        this.register();
    }

    // Recognices when the user press the Enter button
    onKeyPressRegister = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') this.register();
    }

    // Adds the new user to the data base 
    register = () => {
        const {username,email,password} = this.state;
        const wrong = document.getElementById('incorrectRegister');
        const text = document.createTextNode('Please fill out all the fields');
        if(username && email && password){
            fetch('https://secure-forest-63266.herokuapp.com/register',{
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then( res => res.json())
            .then( data => {
                this.props.userUpdate(data);
                this.props.createAccountClick('main');  
            })
        }else{
            if(!wrong.textContent) wrong.appendChild(text);
        }
    }

    render(){
        const {backButtonClick} = this.props;
        return(
            <div className='flexContainer'>
                <div className='register'>
                    <form>
                        <FontAwesomeIcon id='backButton' icon={faAngleLeft} onClick={() => backButtonClick('signIn')}/>
                        <h1 id='headerReg'> Register </h1>
                        <p id='incorrectRegister'></p>
                        <label><b> Username </b></label><br/>
                        <input id='userRegisterInput' className='registerInput' type='text' onKeyPress={this.onKeyPressRegister} onChange={this.onRegisterInputsChange}></input><br/>
                        <label><b> Email </b></label><br/>
                        <input id='emailRegisterInput' className='registerInput' type='email' onKeyPress={this.onKeyPressRegister} onChange={this.onRegisterInputsChange}></input><br/>
                        <label><b> Password </b></label><br/>
                        <input id='passRegisterInput' className='registerInput' type='password' onKeyPress={this.onKeyPressRegister} onChange={this.onRegisterInputsChange}></input><br/>
                        <button id='registerButton' type='button' onClick={this.onRegisterClick}> Create Account </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;