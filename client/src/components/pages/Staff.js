import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({

      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const {  currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName} !</h1>

      </div>
    );
  }
}

export default Staff;
