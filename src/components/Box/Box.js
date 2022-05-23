import React, {Component} from 'react';
import './Box.css';

class Box extends Component{
    render(){
        const {imgWidth, imgHeight,borderData} = this.props;
        const {top_row, bottom_row, left_col, right_col} = borderData;
        const boxWidth = (right_col - left_col)*imgWidth;
        const boxHeight = (bottom_row - top_row)*imgHeight;       
        const myStyle = {
            width: boxWidth + 'px',
            height: boxHeight + 'px ',
            left: left_col*imgWidth + 'px',
            top: top_row*imgHeight + 'px'
        };
        return(
            <div className='box' style={myStyle}>

            </div>
        )
    }
}

export default Box;