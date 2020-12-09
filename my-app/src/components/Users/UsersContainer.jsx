import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
   render() {
      return (
            <Users
               
            />
      );
   }
}

let mapStateToProps = state => {
  return {
   
  };
};

let mapDispatchToProps = (dispatch) => {
   return {
        
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);