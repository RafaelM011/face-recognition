import React, {Component} from 'react';
import './Logo.css';

class Logo extends Component {
    render(){
        return(
            <div className='logoContainer'>
                <img 
                src='https://cdn-icons-png.flaticon.com/512/883/883039.png' 
                alt='logo' 
                className='logoImage'
                />    
            </div>
        )
    }
}

export default Logo;