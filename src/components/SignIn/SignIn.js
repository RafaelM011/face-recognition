import React, {Component} from 'react';
import './SignIn.css';

class SignIn extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    // Updates the state whenever an user types on any field
    onSignInInputsChange = () => {
        this.setState({
            username: document.getElementById('userSignInInput').value,
            password: document.getElementById('passSignInInput').value
        });
    }

    // Recognices if the user clicked on the sign in button
    onSignInClick = () => {
        this.signIn();
    }

    // Recognices if the Enter button has been pressed
    onKeyPressSignIn = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') this.signIn();
    }

    // Sign in to the user's account
    signIn = () => {
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: this.state.username,
                password: this.state.password
            })
        })
        .then( res => res.json())
        .then( user => {
            const wrong = document.getElementById('incorrectSignIn');
            const text = document.createTextNode('Incorrect username or password');
            if (user.id){
                this.props.userUpdate(user);
                this.props.signInClick('main');
            }else{
                if(!wrong.textContent) wrong.appendChild(text);
            }
        })
    }

    render(){
        const {registerClick} = this.props;
        return(
            <div className='flexContainer'>
                <div className='signIn'>
                    <form>
                        <h1 id='headerSign'> Sign In </h1>
                        <p id='incorrectSignIn'></p>
                        <label><b> Username </b></label><br/>
                        <input id='userSignInInput' className='signInInput' type='text' onKeyPress={this.onKeyPressSignIn} onChange={this.onSignInInputsChange}></input><br/>
                        <label><b> Password </b></label><br/>
                        <input id='passSignInInput' className='signInInput' type='password' onKeyPress={this.onKeyPressSignIn} onChange={this.onSignInInputsChange}></input><br/>
                        <button id='signInButton' type='button' onClick={this.onSignInClick}> Sign In</button><br/>
                        <button id='registerButton' type='button' onClick={() => registerClick('register')}> Register </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;