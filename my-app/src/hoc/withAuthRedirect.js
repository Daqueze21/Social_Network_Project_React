import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsToRedirect = state => {
   let { isAuth } = state.auth;
   return { isAuth };
};

export const withAuthRedirect = Component => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.isAuth) {
         return <Redirect to={'/login'} />;
         }

         return <Component {...this.props} />;
      }
   }

   let ConnectAuthRedirectComponent = connect(mapStateToPropsToRedirect)(
      RedirectComponent
   );
   return ConnectAuthRedirectComponent;
};
