import React from 'react';
import Dialogs from "./Dialogs";


function DialogsContainer(props) {
  return (
    <Dialogs state = {props.state}/>
  );
}

export default DialogsContainer;
