import React from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageFormRedux from './AddMessageFormRedux';


function Dialogs(props) {
    let { dialogs, messages } = props.dialogsPage;

    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} key={d.id} id={d.id} />;
    });

    let messagesElements = messages.map(m => {
        return <Message message={m.message} key={m.id} />;
    });

    function addNewMessage(values) {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div>
            <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>

            <div className={styles.messages}>
                <div>{messagesElements}</div>
            </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

export default Dialogs;
