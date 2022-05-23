import React, {Component} from 'react';
import './Rank.css';

class Rank extends Component {
    render(){
        const {userInfo} = this.props;
        return(
            <div className='rankSection'>
                <h1> {`Hello ${userInfo.username}, your current entry count is: `} </h1> 
                <h2> {`${userInfo.entries} entries`} </h2>
            </div>
        )
    }
}

export default Rank;