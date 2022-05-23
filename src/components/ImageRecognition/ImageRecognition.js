import React, {Component} from 'react';
import './ImageRecognition.css';
import Box from '../Box/Box';

class ImageRecognition extends Component{
    
    imageLoaded = () => {
        document.getElementById('image').removeAttribute('hidden');
    }

    wrongLink = () => {
        document.getElementById('image').setAttribute('hidden', true);
    }

    render(){
        const {imageDisplay, boundingBoxes} = this.props;
        const img = document.getElementById('image');
        var boxesArray = boundingBoxes?.map( (box,i)=> {
            const borderData = box.region_info.bounding_box;
            return <Box key={i} borderData={borderData} imgWidth={img.clientWidth} imgHeight={img.clientHeight}/>
        })
        return(
            <div className='imgContainer'>
                <img id='image' src={imageDisplay} alt='' onLoad={this.imageLoaded} onError={this.wrongLink} hidden/>
                {boxesArray}
            </div>
        )
    }
}

export default ImageRecognition;