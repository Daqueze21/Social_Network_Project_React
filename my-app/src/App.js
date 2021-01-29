import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import LoginContainer from './components/Login/LoginContainer';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';

//lazy loading
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
      // if (!this.props.initialized) {
      //     return <Preloader />
      // }
      
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />

          <div className='app-wrapper-content'>
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileContainer)}
            />

            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />

            <Route path='/users' render={withSuspense(UsersContainer)} />

            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div>
      );
  }    
}


let mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
// export default App;
