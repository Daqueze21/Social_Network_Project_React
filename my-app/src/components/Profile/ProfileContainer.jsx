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
      console.log('profile', this.props);
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorisedUserId;
      };

      this.props.getUserProfile(userId);
      this.props.getUserPosts(userId);
   }

   render() {
      return (
         <Profile
            {...this.props}
            profile={this.props.profile}
            authorisedUserId={this.props.authorisedUserId}
            isAuth={this.props.isAuth}
         />
      );
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile,
   authorisedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
});

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
