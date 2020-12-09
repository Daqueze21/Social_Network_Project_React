import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />

        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
