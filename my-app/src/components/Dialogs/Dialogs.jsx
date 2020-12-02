import React from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {
    let { dialogs, messages } = props.dialogsPage;

    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} key={d.id} id={d.id} />;
    });

    let messagesElements = messages.map(m => {
        return <Message message={m.message} key={m.id} />;
    });

    let newMessageText = props.dialogsPage.newMessageBody;

    function onSendMessageClick() {
        props.sendMessage();
    };

    function onNewMessageChange(event) {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>

            <div className={styles.messages}>
                <div>{messagesElements}</div>
                
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder='Enter message'></textarea>
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
