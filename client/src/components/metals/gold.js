import React from 'react';

class Gold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: '',
    };
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', process.env.REACT_APP_METALAPIS);
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch('https://www.goldapi.io/api/XAU/USD', requestOptions)
      .then((response) => response.text())
      .then((result) => this.setState({apiResults: JSON.parse(result)}))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div className='card-item'>
        <h2>{ '$' + Number(this.state.apiResults.price).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2}
        ) + ' USD'}
        </h2>
      </div>
    );
  }
}


export default Gold;
