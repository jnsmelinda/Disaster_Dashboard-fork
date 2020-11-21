import React, { Component } from 'react';
import Stocks from '../stocks/stocks.js';

class Dashboard extends Component {
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
        <br></br>
        <div id='app'></div>
          <div className="card" id = 'disaster'>
            <h2>Disaster Data Goes Here</h2>
              <p>ML Data</p>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'stock'>
          <Stocks/>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'nasa'>
            <h2>Space Data Goes Here</h2>
              <p>KJ Data</p>
          </div>
          <br></br>
          <div id='app'></div>
          <div className="card" id = 'covid'>
            <h2>Covid Data Goes Here</h2>
              <p>MW Data</p>
          </div>


      </div>


    );
  }
}

export default Dashboard;
