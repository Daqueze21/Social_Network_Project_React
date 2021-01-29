// import React from 'react';
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  sendMessageCreator,
} from '../../redux/dialogs-reducer';


let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageText => {
      dispatch(sendMessageCreator(newMessageText));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

