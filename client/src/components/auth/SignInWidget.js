import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

class SignInWidget extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      // eslint-disable-next-line react/prop-types
      baseUrl: this.props.baseUrl,
      logo: 'logo.png'
    });
    // eslint-disable-next-line react/prop-types
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
}

export default SignInWidget;
