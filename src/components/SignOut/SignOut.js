import React, {Component} from 'react';
import './SignOut.css';

class SignOut extends Component {
  render(){
    const {signOut} = this.props;
    return (
      <div className="SignOut">
        <h2 id='btn-signout' onClick={signOut}>Sign Out</h2>
      </div>
    );
  }
}

export default SignOut;
