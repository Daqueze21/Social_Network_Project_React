import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';

class LoginContainer extends React.Component {

  render() {
    return <Login />;
  }
}

let mapStateToProps = state => ({
  state
});


export default connect(mapStateToProps, {})(LoginContainer);
