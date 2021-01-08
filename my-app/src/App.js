import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import { Route } from 'react-router-dom';


function App(props) {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />

      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

        <Route path='/dialogs' render={() => <DialogsContainer />} />

        <Route path='/users' render={() => <UsersContainer />} />

        <Route path='/login' render={() => <LoginContainer />} />
      </div>
    </div>
  );
}

export default App;
