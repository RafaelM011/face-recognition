import React, {Component} from 'react';
import SignOut from './components/SignOut/SignOut';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/ImageLink/ImageLink';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particlesconfig';


class App extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            route: 'signIn',
            boundingBoxes: [],
            user: {
                username: '',
                entries: ''
            }
        }
    }

    // Redirects the website to a desired page
    changeRoute = (route) => {
        this.setState({route: route});
    }
    
    // Detects the value of the input
    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
            boundingBoxes: []
        });
    }

    // Updates user information on the state
    updateUser = (data) => {
        this.setState({
            user: {
                username: data.username,
                entries: data.entries
            }
        });
    }

    // Clean state after sign out
    signOut = () => {
        this.setState({
            inputValue: '',
            route: 'signIn',
            boundingBoxes: [],
            user: {
                username: '',
                entries: ''
            }
        })
    }

    // Display a box surrounding a face
    onButtonClick = () => {
        fetch('http://localhost:3000/image',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: this.state.inputValue
            })
        })
        .then(res => res.json())
        .then(data => {
            if(!data) return
            this.updateEntryCount();
            this.setState({
                boundingBoxes: data
            })
        })
    }

    // Function that updates the entry count of the user
    updateEntryCount = () => {
        fetch('http://localhost:3000/update',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.user.username,
                entries: this.state.user.entries
            })
        })
        .then( res => res.json())
        .then( data => {
            this.setState({
                user: {
                    username: this.state.user.username,
                    entries: data
                }
            });
        })
    }

    //Function to create the tsparticles
    particlesInit = async (main) => {    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    // Renders the website
    render(){
        const {inputValue, route,boundingBoxes, user} = this.state;
        //SignIn Page
        if(route === 'signIn'){
           return(
               <div className='main'>
                    <Particles id='tsparticles' init={this.particlesInit} options={particlesConfig}/>
                    <SignIn signInClick={this.changeRoute} registerClick={this.changeRoute} userUpdate={this.updateUser}/>
                </div>
           ) 
        }
        //Register Page
        if(route === 'register'){
            return(
                <div className='main'>
                    <Particles id='tsparticles' init={this.particlesInit} options={particlesConfig}/>
                    <Register backButtonClick={this.changeRoute} createAccountClick={this.changeRoute} userUpdate={this.updateUser}/>
                </div>
            )
        }
        //Main Page
        return(
            <div className='main'>
                <Particles id='tsparticles' init={this.particlesInit} options={particlesConfig}/>
                <SignOut signOut={this.signOut}/>
                <Logo/>
                <Rank userInfo={user}/>
                <ImageLink inputChange={this.onInputChange} buttonClick={this.onButtonClick}/>
                <ImageRecognition imageDisplay={inputValue} boundingBoxes={boundingBoxes}/>
            </div>
        )
    }
}

export default App;