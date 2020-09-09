import React from 'react';
import styles from './Dialogs.module.css';
// import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    let  dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    let messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message}/>
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}

                {/*<div className={`${styles.dialog}`}>*/}
                {/*    <NavLink to="/dialogs/2">Name2</NavLink>*/}
                {/*</div>*/}
                {/*<div className={`${styles.dialog}`}>*/}
                {/*    <NavLink to="/dialogs/3">Name3</NavLink>*/}
                {/*</div>*/}
                {/*<div className={`${styles.dialog}`}>*/}
                {/*    <NavLink to="/dialogs/4">Name4</NavLink>*/}
                {/*</div>*/}
            </div>

            <div className={styles.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;
