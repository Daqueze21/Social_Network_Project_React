import React from 'react';
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
