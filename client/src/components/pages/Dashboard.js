import React, { Component } from 'react';
import ReadyKit from '../readykit';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims.name
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.currentUserName} !</h1>
        <br></br>
        <ReadyKit username={this.state.currentUserName}></ReadyKit>
        <div id='app'></div>
        <div className="card" id='disaster'>
          <h2>Disaster Data Goes Here</h2>
          <p>ML Data</p>
        </div>
        <br></br>
        <div id='app'></div>
        <div className="card" id='stock'>
          <h2>Stock Data Goes Here</h2>
          <p>KJ Data</p>
        </div>
        <br></br>
        <div id='app'></div>
        <div className="card" id='nasa'>
          <h2>Space Data Goes Here</h2>
          <p>KJ Data</p>
        </div>
        <br></br>
        <div id='app'></div>
        <div className="card" id='covid'>
          <h2>Covid Data Goes Here</h2>
          <p>MW Data</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
