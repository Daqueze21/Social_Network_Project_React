import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {
   setUsers,
   setCurrentPage,
   setTotalUsersCount
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
         this.props.setTotalUsersCount(res.data.length);
      });

      axios
         .get(
         `https://jsonplaceholder.typicode.com/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
         )
         .then(res => {
            this.props.setUsers(res.data);
         });
   }

   onPageChange = pageNumber => {
      this.props.setCurrentPage(pageNumber);
      axios
         .get(
         `https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=${this.props.pageSize}`
         )
         .then(res => {
         this.props.setUsers(res.data);
         });
   };

   render() {
      return (
         <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
         />
      );
   }
}

let mapStateToProps = state => {
   let { users, pageSize, totalUsersCount, currentPage } = state.usersPage;
   return {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
   };
};


export default connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  setCurrentPage
})(UsersContainer);