import React, { Component } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 1;
      }

      //get user data
      axios
         .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
         .then(res => {
         console.log('user', res);
         this.props.setUserProfile(res.data);
         });
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let mapStateToProps = state => {
   let { profile } = state.profilePage;
   return { profile };
};

let DataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile})(
   DataContainerComponent
);
