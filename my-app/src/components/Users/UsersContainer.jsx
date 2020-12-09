import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   follow,
   unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
         this.props.setTotalUsersCount(res.data.length);
      });

      axios
         .get(
         `https://jsonplaceholder.typicode.com/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`
         )
         .then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data);
         });
   }

   onPageChange = pageNumber => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(
         `https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=${this.props.pageSize}`
      )
      .then(res => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(res.data);
      });
   };

   render() {
      return (
         <>
            {this.props.isFetching ? (
               <Preloader />
            ) : (
               <Users
               users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChange={this.onPageChange}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               />
            )}
         </>
      );
   }
}

let mapStateToProps = state => {
   let { users,
      pageSize,
      totalUsersCount,
      currentPage,
      isFetching
   } = state.usersPage;
   return {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
      isFetching
   };
};


export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setTotalUsersCount,
   setCurrentPage,
   toggleIsFetching
})(UsersContainer);