import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  setUserProfile,
  setUserPosts,
  getUserProfile,
  getUserPosts
} from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 1;
      }

      //get user data
      // axios
      //    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      //    .then(res => {
      //    console.log('user', res);
      //    this.props.setUserProfile(res.data);
      //    });
      this.props.getUserProfile(userId);

      this.props.getUserPosts(userId);
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let mapStateToProps = state => {
   let { profile } = state.profilePage;
   return { profile };
};

export default compose(
   connect(mapStateToProps, {
      setUserProfile,
      setUserPosts,
      getUserProfile,
      getUserPosts
   }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
