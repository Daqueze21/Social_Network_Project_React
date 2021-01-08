import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout, setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
   render() {
      return <Header {...this.props}/>;
   }
}

let mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
   userName: state.auth.userName
});

export default connect(mapStateToProps, { setAuthUserData, logout })(
   HeaderContainer
);
