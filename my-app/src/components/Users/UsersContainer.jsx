import React from 'react';
import { connect } from 'react-redux';
import {
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   follow,
   unfollow,
   getUsersThunk
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.toggleIsFetching(true);
      this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
   }

   onPageChange = pageNumber => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      this.props.getUsersThunk(pageNumber, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ?
               <Preloader />
            :
               <Users
               users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChange={this.onPageChange}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               />
            }
         </>
      );
   }
}

let mapStateToProps = state => (
   {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
   });

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setTotalUsersCount,
      toggleIsFetching,
      getUsersThunk
   }),
   withAuthRedirect
)(UsersContainer);