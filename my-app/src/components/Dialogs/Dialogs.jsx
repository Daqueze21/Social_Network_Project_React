import React from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    let  dialogsElements = props.state.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });
    let messagesElements = props.state.messages.map((m) => {
        return <Message message={m.message}/>
    });
    
    function onSendMessageClick () {
        console.log('send');
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>

            <div className={styles.messages}>
            <div>{messagesElements}</div>
            <div>
                <div>
                    <textarea placeholder='Enter message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Dialogs;
