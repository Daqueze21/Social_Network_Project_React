import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {
  setUsers
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
   componentDidMount() {
         axios.get(
         `https://jsonplaceholder.typicode.com/users`
         ).then(res => {
            this.props.setUsers(res.data);
         });
   }

   render() {
      return <Users users={this.props.users} />;
   }
}

let mapStateToProps = state => {
   let { users } = state.usersPage;
   return {
      users
   };
};


export default connect(mapStateToProps, { setUsers })(UsersContainer);