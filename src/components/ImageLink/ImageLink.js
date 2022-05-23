import React, {Component} from 'react';
import './ImageLink.css';

class ImageLink extends Component {
    render(){
        const {inputChange, buttonClick} = this.props;
        return(
            <div className='inputBox'>
                <p id='paragraph'><b>This website will detect faces in your pictures! </b></p>
                <div id='linkBox'>
                    <input type='text' className='inputLink' onChange={inputChange}/>
                    <button className='linkButton' onClick={buttonClick}>Detect</button>
                </div>
            </div>
        )
    }
}

export default ImageLink;